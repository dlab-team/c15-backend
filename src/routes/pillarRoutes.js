import express from 'express';
const router = express.Router();

import pillarController from '../controllers/pillarController.js';

router.post("/create", pillarController.create);
router.get("/", pillarController.readAll)
router.get("/:id", pillarController.read)
router.put("/:id", pillarController.update)
router.delete("/:id", pillarController.destroy) 

export default router;