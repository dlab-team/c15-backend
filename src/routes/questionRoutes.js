import express from 'express';
const router = express.Router();

import questionController from '../controllers/questionController.js';

router.post("/create", questionController.create);

export default router;