import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';
dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.set('port', process.env.NODE_PORT || 3000);


// Set up routes
routes(app);

app.listen(app.get('port'), () => {
    console.log(`The Express application is running on port:${app.get('port')}`)
});
