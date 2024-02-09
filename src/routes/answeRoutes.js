import { Router } from 'express';
import answerController from'../controllers/answerController.js';

const answerRoutes = Router();
const answerController = new answerController();

/**Obtiene un respuesta en particular */
answerRoutes.get('/answers/:id', async (req, res) => {
    try {
        const findAnswer = await answerController.getanswerById(req.params.id);
        res.json(findanswer);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

/**Obtiene todas las respuestas */
answerRoutes.get('/answers/', async (req, res) => {
    try {
      res.status(200).json({
        message: 'Lista de respuestas: ',
        list: await answerController.getAllanswers()
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
answerRoutes.post('/answers/save', async (req, res) => {
  try {
    res.status(200).json({
      message: 'Guardando respuesta...',
      saved: await answerController.createanswer(req.body)
    });
  } catch (error) {
    console.error('Error al guardar respuesta:', error);
    res.status(500).json({
      message: 'Error al guardar respuesta:',
      error: error.message
    });
  }
});

/**Actualiza un respuesta */
answerRoutes.put('/answers/:id', async (req, res) => {
    try {
      const updatedanswer = await answerController.updateanswer(req.params.id, req.body);
      res.json(updatedanswer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

/**Elimina un respuesta */
answerRoutes.delete('/answers/:id', async (req, res) => {
    try {
      const deletedanswer = await answerController.deleteanswer(req.params.id);
      res.json(deletedanswer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


export default answerRoutes;