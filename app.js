import express from 'express';
import routes from './src/routes/routes.js';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';
import answerRoutes from './src/routes/answeRoutes.js';
import diagnosticRoutes from './src/routes/diagnosticRoutes.js';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// Express server creation
const app = express();

//Para analizar el cuerpo de las solicitudes que tienen un formato JSON
app.use(bodyParser.json());

// Port configuration
app.set('port', process.env.NODE_DOCKER_PORT || 3000);

// Route files configuration
app.use(routes);
app.use(userRoutes);
app.use(answerRoutes);
//app.use(questionRoutes);
//app.use(optionRoutes);
app.use(diagnosticRoutes);


// Data type configuration
app.use(express.json());
app.use(express.urlencoded({  extended: true})
);
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`The Express application is running on port:${app.get('port')}`)
});
