import { Router } from 'express';
const routes = Router();

routes.get('/', (req, res) => {
    res.send('¡Bienvenidos C15!');
});

routes.get('/pruebas', (req, res) => {
    res.send('Mensaje de prueba');
});

export default routes;