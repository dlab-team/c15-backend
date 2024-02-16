import { Router } from 'express';
import ProcessDiagnosticController from '../controllers/processDiagnosticController.js';
import DiagnosticController from '../controllers/diagnosticController.js';

const diagnosticRoutes = Router();
const diagnosticController = new DiagnosticController();
const processDiagnosticController = new  ProcessDiagnosticController();

/**Obtiene un diagnóstico en particular */
diagnosticRoutes.get('/diagnostic/:id', async (req, res) => {
    try {
        const findDiagnostic = await diagnosticController.getDiagnosticById(req.params.id);
        res.json(findDiagnostic);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

/**Obtiene todos los diagnósticos */
diagnosticRoutes.get('/diagnostic/', async (req, res) => {
    try {
      res.status(200).json({
        message: 'Lista de diagnósticos: ',
        list: await diagnosticController.getAllDiagnostic()
      });
    } catch (error) {
      console.error('Error al generar la lista de diagnósticos:', error);
      res.status(500).json({
        message: 'Error al generar la lista de diagnósticos',
        error: error.message
      });
    }
});

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

/**Actualiza un diagnóstico */
diagnosticRoutes.put('/diagnostic/:id', async (req, res) => {
    try {
      const updatedDiagnostic = await diagnosticController.updateDiagnostic(req.params.id, req.body);
      res.json(updatedDiagnostic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

/**Elimina un diagnóstico */
diagnosticRoutes.delete('/diagnostic/:id', async (req, res) => {
    try {
      const deletedDiagnostic = await diagnosticController.deleteDiagnostic(req.params.id);
      res.json(deletedDiagnostic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


export default diagnosticRoutes;