import { Router } from 'express';
import QuestionnaireController from '../controllers/questionnaireController.js';

const questionnaireRoutes = Router();
const questionnaireController = new QuestionnaireController();

questionnaireRoutes.get('/questionnarie', async (req, res) => {
    try {
        const questions = await questionnaireController.getAllQuestion();
        res.status(200).json(questions);
    } catch (error) {
        console.error('Error al generar cuestionario:', error);
        res.status(500).json({
            message: 'Error al generar cuestionario',
            error: error.message
        });
    }
});

export default questionnaireRoutes;