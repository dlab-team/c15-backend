import express from 'express';
import routes from './routes/routes.js';
//Creación servidor express
const app = express();

// Configuración express
app.set('port', process.env.PORT || 3000)

// API rutas
app.use(routes)

app.listen(app.get('port'), () => {
    console.log(`La aplicación con express se está ejecutando en el puerto: ${app.get('port')}`)
});
