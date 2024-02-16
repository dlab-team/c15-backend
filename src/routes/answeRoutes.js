import { Router } from 'express';
import AnswerController from'../controllers/answerController.js';
import ProcessDiagnosticController from '../controllers/processDiagnosticController.js';

const answerRoutes = Router();
const answerController = new AnswerController();
const processDiagnosticController = new  ProcessDiagnosticController();

/**Obtiene un respuesta en particular */
answerRoutes.get('/answers/:id', async (req, res) => {
    try {
        const findAnswer = await answerController.getAnswerById(req.params.id);
        res.json(findAnswer);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

/**Obtiene todas las respuestas */
answerRoutes.get('/answers/', async (req, res) => {
    try {
      res.status(200).json({
        message: 'Lista de respuestas: ',
        list: await answerController.getAllAnswer()
      });
    } catch (error) {
      console.error('Error al generar la lista de respuestas:', error);
      res.status(500).json({
        message: 'Error al generar la lista de respuestas',
        error: error.message
      });
    }
});

/**Guarda un nueva respuesta */
answerRoutes.post('/answers/process/', async (req, res) => {
  try {
    res.status(200).json({
      message: 'Saving answers...',
      saved: await processDiagnosticController.processAnswerDiasgnostic(req)
    });
  } catch (error) {
    console.error('Error saving responses:', error);
    res.status(500).json({
      message: 'Error saving responses: '+req.body,
      error: error.message
    });
  }
});

/**Actualiza un respuesta */
answerRoutes.put('/answers/:id', async (req, res) => {
    try {
      const updatedanswer = await answerController.updateAnswer(req.params.id, req.body);
      res.json(updatedanswer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

/**Elimina un respuesta */
answerRoutes.delete('/answers/:id', async (req, res) => {
    try {
      const deletedanswer = await answerController.deleteAnswer(req.params.id);
      res.json(deletedanswer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


export default answerRoutes;