import { Router } from 'express';
import ProcessDiagnosticController from '../controllers/processDiagnosticController.js';

const diagnosticRoutes = Router();
const processDiagnosticController = new  ProcessDiagnosticController();

/**Obtener diagnóstico*/
diagnosticRoutes.get('/diagnostic/process/:id', async (req, res) => {
  try {
    res.status(200).json(
     await processDiagnosticController.processDiagnostic(req.params.id)
    );
  } catch (error) {
    console.error('Error processing diagnostic:', error);
    res.status(500).json({
      message: 'Error processing diagnosis: '+req.body,
      error: error.message
    });
  }
});


export default diagnosticRoutes;