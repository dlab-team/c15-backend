import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';
import { validateUser } from '../middleware/tokenValidation.js';

router.get('/', validateUser([2]), userController.index);
router.get('/:id', validateUser([2]), userController.read);
router.post('/', userController.create);
router.put('/:id', validateUser([]), userController.update);
router.delete('/:id', validateUser([2]), userController.destroy);
router.put('/:id/password', validateUser([]), userController.change_password);

export default router;
