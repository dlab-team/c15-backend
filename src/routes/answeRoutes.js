import { Router } from 'express';
import ProcessDiagnosticController from '../controllers/processDiagnosticController.js';

const answerRoutes = Router();
const processDiagnosticController = new  ProcessDiagnosticController();

/**Guarda un nueva respuesta */
answerRoutes.post('/answers/process/', async (req, res) => {
  try {
    res.status(200).json({
      message: await processDiagnosticController.processAnswerDiasgnostic(req)
    });
  } catch (error) {
    console.error('Error saving responses:', error);
    res.status(500).json({
      message: 'Error saving responses: '+req.body,
      error: error.message
    });
  }
});

export default answerRoutes;