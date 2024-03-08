import { Router } from 'express';
import diagnostic from '../controllers/diagnosticController.js';
const router = Router();

router.post('/',diagnostic.create);
router.get('/:id',diagnostic.read);

export default router;
