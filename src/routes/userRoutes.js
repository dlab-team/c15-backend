import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';
import userIdAccess from '../middleware/userIdAccess.js';

router.get('/', userController.index);
router.get('/:id', userIdAccess, userController.read);
router.post('/', userController.create);
router.put('/:id', userIdAccess, userController.update);
router.delete('/:id', userIdAccess, userController.destroy);

export default router;
