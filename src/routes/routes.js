import { Router } from 'express';
import PersonaController from'../controllers/personaController.js';

const routes = Router();
const personaController = new PersonaController();

routes.get('/', (req, res) => {
    res.send('¡Bienvenidos C15!');
});

routes.get('/pruebas', (req, res) => {
    res.send('Mensaje de prueba');
});

routes.get('/personas', async (req, res) => {
    try {
      res.status(200).json({
        message: 'Personas encontradas',
        personas: await personaController.finAllPersona()
      });
    } catch (error) {
      console.error('Error al consultar personas:', error);
      res.status(500).json({
        message: 'Error al consultar personas',
        error: error.message
      });
    }
  });


export default routes;