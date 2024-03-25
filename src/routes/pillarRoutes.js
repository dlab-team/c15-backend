import express from 'express';
const router = express.Router();

import pillarController from '../controllers/pillarController.js';

router.post("/create", pillarController.create);
router.get("/", pillarController.readAll);
router.get("/:id", pillarController.read);
router.put("/:id", pillarController.update);
router.delete("/:id", pillarController.destroy);
router.get("/:id/messages", pillarController.index_messages);
router.post("/:id/messages", pillarController.create_message);
router.put("/:id/messages/:msg_id", pillarController.update_message);
router.delete("/:id/messages/:msg_id", pillarController.destroy_message);

export default router;
