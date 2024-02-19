import models from "../models/index.js";
import Sequelize from 'sequelize';

class DiagnosticController {

   async getAllDiagnosticByCompany(idCompany) {
    let diagnosticData = null;
    try {
      //Obtiene el diagnostic más actual
      diagnosticData = await models.Diagnostic.findAll({
        where: { id_company: idCompany },
        order: [['createdAt', 'DESC']],
        limit: 6
      });
    } catch (error) {
      console.error(`Error getting Diagnostic with ID (${idCompany}):`, error);
      throw error;
    }
    let pillarDiagnosticData = [];
    for (const diagnosis of diagnosticData) {
      try {
        //Busca en el registro de Pillar Diagnostic según id de Diagnostic
        const result = await models.PillarDiagnostic.findByPk(diagnosis.id);
        pillarDiagnosticData.push(result)

      } catch (error) {
        console.error(`Error getting Pillar Diagnostic by idDiagnostic:`, error);
        throw error;
      }
    }
    try {

      let diagnosisMetaData = [];
      for (const metaData of pillarDiagnosticData) {
        //Se obtiene el nombre del Pillar y los mensajes y score_limits asociados
        const pillarData = await models.Pillar.findAll({
          attributes: ['name'],
          where: {
            id: metaData.id_pillar
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
      return diagnosisMetaData;
    } catch (error) {
      console.error(`Error getting data from Pillar:`, error);
      throw error;
    }
  }
}

export default DiagnosticController;
