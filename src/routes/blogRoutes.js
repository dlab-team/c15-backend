import express from 'express';
const router = express.Router();

import blogController from '../controllers/blogController.js';

router.get("/", blogController.index);
router.post("/create", blogController.create);
router.get("/:id", blogController.read)
router.put("/:id", blogController.update)
router.delete("/:id", blogController.destroy)

export default router;