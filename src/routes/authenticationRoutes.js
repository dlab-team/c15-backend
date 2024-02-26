import { Router } from 'express';
const router = Router();
import authController from '../controllers/authenticationController.js';

router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
