import models from "../models/index.js";
import utils from "./helper/utils.js";
import optionController from "./optionController.js";

const { User, Diagnostic, Answer, Pillar, PillarDiagnostic } = models;

async function _getDiagnosticByCompany(req, res) {
  try {

    if (!utils.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Required ID is missing, null or undefined' });
    }
    const diagnosticData = await _findOneByCompanyId(req.params.id);

    if (!utils.hasData(diagnosticData)) {
      return res.status(404).json({ success: false, message: 'Diagnostic not found by Company ID' });
    }

    const pillarDiagnosticData = await _getPillarDiagnosticData(diagnosticData, res);

    if (!utils.hasData(pillarDiagnosticData)) {
      return res.status(404).json({ success: false, message: 'Pillar Diagnostic not found' });
    }
    const diagnosisMetaData = await _getDiagnosisMetaData(pillarDiagnosticData, res);

    return diagnosisMetaData;

  } catch (error) {
    return error;
  }
}

async function _findOneByCompanyId(companyID, res) {

  try {

    if (!utils.isValid(companyID)) {
      return res.status(404).json({ success: false, message: 'Required company Id is missing' });
    }

    if (!Number.isInteger(parseInt(companyID))) {
      return res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }

    const diagnosis = await Diagnostic.findOne({
      where: { company_id: companyID },
      order: [['createdAt', 'DESC']]
    });

    if (!diagnosis) {
      return res.status(404).json({ success: false, message: 'Diagnostic not found' });
    }
    return diagnosis;

  } catch (error) {
    return error;
  }
}

async function _getPillarDiagnosticData(diagnosticData, res) {

  try {
    //Search the all Pillar Diagnostic log by Diagnostic id
    const pillarDiagnostic = await PillarDiagnostic.findAll({
      where: {
        diagnostic_id: diagnosticData.id
      }
    });
    if (pillarDiagnostic) {

      return pillarDiagnostic;

    } else {
      return res.status(404).json({ success: false, message: "Null Point by Id pillar diagnostic" });
    }

  } catch (error) {
    return error;
  }
}

async function _getDiagnosisMetaData(pillarDiagnosticData, res) {
  let diagnosisMetaData = [];

  try {
    for (const metaData of pillarDiagnosticData) {
      //Obtain the name of the Pillar and the associated messages and score_limits
      const pillarData = await Pillar.findAll({
        attributes: ['name'],
        where: {
          id: metaData.pillar_id
        },
        include: [{
          model: models.PillarMessage,
          attributes: ['score_limit', 'message'],
        }],
        order: [[
          {
            model: models.PillarMessage
          },
          'score_limit', 'ASC'
        ]],
      });

      diagnosisMetaData.push({
        pillar: pillarData[0].name,
        value: metaData.score,
        description: pillarData[0].Pillar_messages.map(data => ({
          score_limit: data.score_limit,
          message: data.message
        }))
      });
    }
  } catch (error) {
    return error;
  }
  return diagnosisMetaData;
}

async function create(req, res) {

  console.log("Entré al método");
  //Transaction: in case of any problem the data will not be persisted in the database
  const newTransaction = await models.database.transaction();
  try {

    const requestBody = req.body.answers;
    let sumScore = 0.0;
    let scorePercentage = 0.0;
    let errorOcurred = false;
    let companyID = null;

    if (!utils.isValid(req.body.company_id)) {
      return res.status(400).json({ success: false, message: 'Required Company Id is missing' });
    }
    companyID = parseInt(req.body.company_id);

    if (!Number.isInteger(companyID)) {
      return res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }

    if (!utils.hasData(requestBody)) {
      return res.status(400).json({ success: false, message: 'Required Answers group is missing' });
    }

    const diagnosis = await Diagnostic.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      company_id: companyID
    }, { transaction: newTransaction });

    for (const metaQuestion of requestBody) {

      if (!utils.hasData(metaQuestion.options)) {
        errorOcurred = true;
        return res.status(400).json({ success: false, message: 'Required Options group is missing' });
      }

      if (!utils.isValid(metaQuestion.pillar_id)) {
        errorOcurred = true;
        return res.status(400).json({ success: false, message: 'Required Pillar Id is missing' });
      }

      const checkPillar = await Pillar.findByPk(metaQuestion.pillar_id);

      if (!utils.hasData(checkPillar)) {
        errorOcurred = true;
        return res.status(400).json({ success: false, message: "Pillar ID doesn't exist", id: metaQuestion.pillar_id });
      }

      for (const answer of metaQuestion.options) {

        if (!utils.isValid(answer.option_id)) {

          errorOcurred = true;
          res.status(400).json({ success: false, message: 'Required Option Id is missing' });

        } else {
          const option_id = parseInt(answer.option_id);

          if (!Number.isInteger(option_id)) {
            errorOcurred = true;
            res.status(400).json({ success: false, message: "Option ID isn't an integer" });
          }
        }
        if (!errorOcurred) {
          console.log();
          const option = await optionController.getOptionById(answer.option_id, res);
          sumScore += option.score;
        }
      }

      if (sumScore > 0) {
        //The calculation equivalent to the percentage that corresponds to the catch is carried out..
        scorePercentage = ((sumScore * 100) / 30).toFixed(1);
      }

      if (!errorOcurred) {

        const answersData = metaQuestion.options.map(element => ({
          diagnostic_id: diagnosis.id,
          option_id: element.option_id
        }));

        await Answer.bulkCreate(answersData, { transaction: newTransaction });

        await PillarDiagnostic.create({
          score: scorePercentage,
          diagnostic_id: diagnosis.id,
          pillar_id: metaQuestion.pillar_id
        }, { transaction: newTransaction });
      }

      sumScore = 0.0;
      scorePercentage = 0.0;
    }
    if (!errorOcurred) {
      await newTransaction.commit();
      return res.status(200).json({ success: true, message: 'The diagnosis has been processed successfully' });
    }
    await newTransaction.rollback();

  } catch (error) {
    await newTransaction.rollback();
    return error;
  }
}

async function read(req, res) {

  try {

    if (!utils.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Required ID is missing, null or undefined' });
    }
    const diagnosticID = parseInt(req.params.id);

    if (!Number.isInteger(diagnosticID)) {
      return res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }
 
      const diagnosticData = await Diagnostic.findOne({
         attributes: ['id', 'createdAt'],
         where: { id: diagnosticID}
        });

    if (!utils.hasData(diagnosticData)) {
      return res.status(404).json({ success: false, message: 'Diagnostic not found by Company ID' });
    }

    const pillarDiagnosticData = await _getPillarDiagnosticData(diagnosticData, res);

    if (!utils.hasData(pillarDiagnosticData)) {
      return res.status(404).json({ success: false, message: 'Pillar Diagnostic not found' });
    }
    const diagnosisMetaData = await _getDiagnosisMetaData(pillarDiagnosticData, res);
    
    let diagnosticResult = [];
    try {


      let prevMessage = { score_limit: 0.0 };
      //Determines the message to display based on the position of the score 
      //between the score_limit values
      for (const metaData of diagnosisMetaData) {
        let messageToDisplay = "";

        const maxScoreLimit = metaData.description[metaData.description.length - 1].score_limit;

        const scoreQuestion = ((metaData.value * maxScoreLimit) / 100).toFixed(1);

        for (const objectDiagnosis of metaData.description) {

          if (scoreQuestion >= prevMessage.score_limit && scoreQuestion <= objectDiagnosis.score_limit) {

            messageToDisplay = objectDiagnosis.message;
            prevMessage = { score_limit: 0.0 };
            break;
          }
          prevMessage = objectDiagnosis;
        }
        diagnosticResult.push({
          ...metaData,
          description: messageToDisplay
        });
      }

      diagnosticResult.additionalInfo={"createdAt": diagnosticData.createdAt};
      
    } catch (error) {
      return res.status(404).json({ success: false, message: `A problem gestting diagnosis: ` + error });
    }
    res.json(diagnosticResult);

  } catch (error) {
    return error;
  }
}

async function readLastDiagnosticByCompanyId(req, res) {
  try {
    let diagnosticResult = [];
    try {

      const diagnosticData = await _getDiagnosticByCompany(req, res);

      let prevMessage = { score_limit: 0.0 };
      //Determines the message to display based on the position of the score 
      //between the score_limit values
      for (const metaData of diagnosticData) {
        let messageToDisplay = "";

        const maxScoreLimit = metaData.description[metaData.description.length - 1].score_limit;

        const scoreQuestion = ((metaData.value * maxScoreLimit) / 100).toFixed(1);

        for (const objectDiagnosis of metaData.description) {

          if (scoreQuestion >= prevMessage.score_limit && scoreQuestion <= objectDiagnosis.score_limit) {

            messageToDisplay = objectDiagnosis.message;
            prevMessage = { score_limit: 0.0 };;
            break;
          }

          prevMessage = objectDiagnosis;
        }
        diagnosticResult.push({
          ...metaData,
          description: messageToDisplay
        });
      }
    } catch (error) {
      return res.status(404).json({ success: false, message: `A problem gestting diagnosis: ` + error });
    }
    res.json(diagnosticResult);

  } catch (error) {
    return error;
  }
}

async function readAllByAllUsers(req, res) {
  try {    
    const users = await User.findAll({
      attributes: ['id', 'first_name', 'email', [ models.database.literal('COALESCE("User"."active", false)'), 'active']],
      include: [{
        model: models.Company,
        required: true,
       attributes: ['id', 'name'],
        include: [{
          model: models.Diagnostic,
          required: true,
          attributes: ['id', 'createdAt'],
      }]
    }],
    order:[
      ['first_name','ASC']
    ]   
    });

    if (!utils.hasData(users)) {
      return res.status(404).json({ success: false, message: 'Diagnostic by users not found' });
    }

    res.json(users);

  } catch (error) {
    return error;
  }
}

async function readAllByUserId(req, res){
  try {    

    const userId= req.params.id;

    if (!utils.isValid(userId)) {
      return res.status(404).json({ success: false, message: 'Required user Id is missing' });
    }

    if (!Number.isInteger(parseInt(userId))) {
      return res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }

    const users = await User.findAll({
      //attributes: ['id', 'first_name', 'email', [models.database.literal('COALESCE("User"."active", false)'), 'active']],
      attributes:[],
      where: { id: userId },
      include: [{
        model: models.Company,
        required: true,
        attributes: ['id', 'name'],
        include: [{
          model: models.Diagnostic,
          required: true,
          attributes: ['id', 'createdAt'],
          order: models.database.literal('"createdAt" DESC')
        }],     
      }],
  
    });

    if (!utils.hasData(users)) {
      return res.status(404).json({ success: false, message: 'Diagnostic by user not found' });
    }

    res.json(users);

  } catch (error) {
    return error;
  }
}

async function readAllByCompanyId(req, res){
  try {    

    const userId= req.params.id;

    if (!utils.isValid(userId)) {
      return res.status(404).json({ success: false, message: 'Required user Id is missing' });
    }

    if (!Number.isInteger(parseInt(userId))) {
      return res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }

    const users = await User.findAll({
      attributes: ['id', 'first_name', 'email', [models.database.literal('COALESCE("User"."active", false)'), 'active']],
      where: { id: userId },
      include: [{
        model: models.Company,
        required: true,
        attributes: ['id', 'name'],
        include: [{
          model: models.Diagnostic,
          required: true,
          attributes: ['id', 'createdAt'],
        
        }],
       
      }],
      order: [
        ['createdAt', 'DESC']
      ]
    });

    if (!utils.hasData(users)) {
      return res.status(404).json({ success: false, message: 'Diagnostic by user not found' });
    }

    res.json(users);

  } catch (error) {
    return error;
  }
}

export default {
  create, 
  read, 
  readLastDiagnosticByCompanyId, 
  readAllByAllUsers,
  readAllByUserId,
  readAllByCompanyId
};

