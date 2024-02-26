import express from 'express';
const router = express.Router();

import questionnaireController from '../controllers/questionnaireController.js';

router.get("/", questionnaireController.read)

export default router;