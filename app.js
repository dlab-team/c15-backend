import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// Express server creation
const app = express();

//Para analizar el cuerpo de las solicitudes que tienen un formato JSON
app.use(bodyParser.json());

// Port configuration
app.set('port', process.env.NODE_DOCKER_PORT || 3000);

// Set up routes
import routes from './src/routes/index.js';
routes(app);

// Data type configuration
app.use(express.json());
app.use(express.urlencoded({  extended: true})
);
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`The Express application is running on port:${app.get('port')}`)
});
