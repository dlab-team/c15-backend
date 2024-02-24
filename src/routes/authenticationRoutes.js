import { Router } from 'express';
const router = Router();
import authController from '../controllers/authenticationController.js';

router.post('/', authController.login);

export default router;
