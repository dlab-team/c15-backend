import express from 'express';
const router = express.Router();

import * as questionController from '../controllers/questionController.js';

router.post("/create", async (req, res, next) => {
    try {
        const { question, pillarId } = req.body;
        if (question && pillarId) {
           const newQuestion = await questionController.createQuestion(question, pillarId)
            res.status(201).json({
                message: `Question ${newQuestion.id} successfully created`  });
        } else {
          return res.status(400).json({ success: false, message: "Required data is missing (question, pillarId)" });
       }
    } catch (error) {
        return next(error);
    }
});

export default router;