import models from "../models/index.js";
import Sequelize from 'sequelize';

const { Diagnostic } = models;

class DiagnosticController {

  async createDiagnostic(dataDiagnostic) {
    try {

      const newDiagnostic = await Diagnostic.create(dataDiagnostic);
      return newDiagnostic;
    } catch (error) {
      console.error('Error al crear un nueva diagnóstico:', error);
      throw error;
    }
  }

  async getDiagnosticById(idDiagnostic) {
    try {
      const diagnostic = await Diagnostic.findByPk(idDiagnostic);

      if (!diagnostic) {
        throw new Error('Diagnóstico no encontrado por id');
      }
      return diagnostic;
    } catch (error) {
      console.error(`Error al obtener diagnóstico con ID (${idDiagnostic}):`, error);
      throw error;
    }
  }

  async updateDiagnostic(idDiagnostic, data) {
    try {
      const diagnostic = await Diagnostic.findByPk(idDiagnostic);
      if (!diagnostic) {
        throw new Error('Diagnóstico no encontrado para actualizar');
      }
      await diagnostic.update(data);
      return diagnostic;
    } catch (error) {
      console.error(`Error al actualizar diagnóstico con ID (${idDiagnostic}):`, error);
      throw error;
    }
  }

  async deleteDiagnostic(idDiagnostic) {
    try {
      const diagnostic = await Diagnostic.findByPk(idDiagnostic);

      if (!diagnostic) {
        throw new Error('Opción no encontrada para eliminar');
      }

      await diagnostic.destroy();

      return { message: 'Opción eliminada correctamente' };
    } catch (error) {
      console.error(`Error al eliminar la opción con ID (${idDiagnostic}):`, error);
      throw error;
    }
  }

  async getAllDiagnostic() {
    try {
      const diagnostic = await Diagnostic.findAll();

      return diagnostic;
    } catch (error) {
      console.error('Error al obtener las opciones:', error);
      throw error;
    }
  }

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
