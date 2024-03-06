import models from "../models/index.js";
import utils from "./helper/utils.js";
import optionController from "./optionController.js";

const { Diagnostic, Answer, Pillar, PillarDiagnostic } = models;

async function _getAllDiagnosticByCompany(req, res) {
  try {

    if (!utils.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Required ID is missing, null or undefined' });
    }
    const diagnosticData = await findAllByCompanyId(req.params.id);

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

async function _getPillarDiagnosticData(diagnosticData, res) {
  let pillarDiagnosticData = [];
  for (const diagnosis of diagnosticData) {
    try {
      //Search the Pillar Diagnostic log by Diagnostic id
      const diagnosticPillar = await PillarDiagnostic.findOne({
        where: {
          diagnostic_id: diagnosis.id
        }
      });

      if (diagnosticPillar) {
        // Check if a record with the same ID already exists in pillarDiagnosticData
        const existingIndex = pillarDiagnosticData.findIndex(item => item.pillar_id === diagnosticPillar.pillar_id);
        if (existingIndex !== -1) {
          // If exists, compare the IDs and replace if the new one is greater
          if (pillarDiagnosticData[existingIndex].id < diagnosticPillar.id) {
            pillarDiagnosticData.splice(existingIndex, 1);
            pillarDiagnosticData.push(diagnosticPillar);
          }
        } else {
          pillarDiagnosticData.push(diagnosticPillar);
        }

      } else
        return res.status(404).json({ success: false, message: "Null Point by Id pillar diagnostic" });
    } catch (error) {
      return error;
    }
  }
  return pillarDiagnosticData;
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

async function findAllByCompanyId(companyID, res) {

  try {

    if (!utils.isValid(companyID)) {
      return res.status(404).json({ success: false, message: 'Required company Id is missing' });
    }

    let pillarCount = await Pillar.count();

    if (!utils.hasData(pillarCount)) {
      pillarCount = 6;
    }
    const diagnosis = await Diagnostic.findAll({
      where: { company_id: companyID },
      order: [['createdAt', 'DESC']],
      limit: pillarCount
    });

    if (!diagnosis) {
      return res.status(404).json({ success: false, message: 'Diagnostic not found' });
    }
    return diagnosis;

  } catch (error) {
    return error;
  }
}

async function create(req, res) {
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
        }
        if (!errorOcurred) {
          const option = await optionController.getOptionById(answer.option_id, res);
          sumScore += option.score;
        }
      }

      if (sumScore > 0) {
        //The calculation equivalent to the percentage that corresponds to the catch is carried out..
        scorePercentage = ((sumScore * 100) / 30).toFixed(1);
      }


      if (!errorOcurred) {

        const diagnosis = await Diagnostic.create({
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: companyID
        }, { transaction: newTransaction });

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
    let diagnosticResult = [];
    try {

      const diagnosticData = await _getAllDiagnosticByCompany(req, res);

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

export default {
  findAllByCompanyId,
  create, read
};

