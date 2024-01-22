import express from 'express';
import routes from './src/routes/routes.js';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

import { database } from './src/config/database.js';

database.authenticate()
    .then(()=> console.log('Base de datos conectada...'))
    .catch(err=> console.log('Error: '+err));

// Express server creation
const app = express();

// Port configuration
app.set('port', process.env.PORT || 3000)

// Route files configuration
app.use(routes)

// Data type configuration
app.use(express.json());
app.use(express.urlencoded({  extended: true})
);
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`The Express application is running on port:${app.get('port')}`)
});
