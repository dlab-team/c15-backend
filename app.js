import express from 'express';
import routes from './src/routes/routes.js';
import cors from 'cors'
import dotenv from 'dotenv';
import userRouter from './src/routes/userRoutes.js';
import bodyParser from 'body-parser';
dotenv.config();

import { database } from './src/config/database.js';

database.authenticate()
    .then(()=> console.log('Base de datos conectada...'))
    .catch(err=> console.log('Error: '+err));

// Express server creation
const app = express();

//Para analizar el cuerpo de las solicitudes que tienen un formato JSON
app.use(bodyParser.json());

// Port configuration
app.set('port', process.env.PORT || 3000)

// Route files configuration
app.use(routes);
app.use(userRouter);

// Data type configuration
app.use(express.json());
app.use(express.urlencoded({  extended: true})
);
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`The Express application is running on port:${app.get('port')}`)
});
