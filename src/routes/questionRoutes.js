import express from 'express';
const router = express.Router();

import questionController from '../controllers/questionController.js';

router.post("/create", questionController.create);
router.get("/:id", questionController.read)
router.put("/:id", questionController.update)
router.delete("/:id", questionController.destroy)

export default router;