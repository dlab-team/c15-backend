import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';

router.get('/', userController.index);
router.get('/:id', userController.read);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

export default router;
