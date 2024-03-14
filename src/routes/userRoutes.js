import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';
import { validateUserId } from '../middleware/tokenValidation.js';

router.get('/', userController.index);
router.get('/:id', validateUserId, userController.read);
router.post('/', userController.create);
router.put('/:id', validateUserId, userController.update);
router.delete('/:id', validateUserId, userController.destroy);
router.put('/:id/password', validateUserId, userController.change_password);

export default router;
