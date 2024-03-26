import { Router } from 'express';
const router = Router();
import authController from '../controllers/authenticationController.js';
import { validateRecovery } from '../middleware/tokenValidation.js';

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/recovery', authController.recovery_email);
router.put('/reset_password', validateRecovery, authController.reset_password);
router.put('/activation', authController.activate_user);

export default router;
