import { Router } from 'express';
import diagnostic from '../controllers/diagnosticController.js';
const router = Router();

router.post('/',diagnostic.create);
router.get('/users/',diagnostic.readAllByAllUsers);
router.get('/user/:id',diagnostic.readAllByUserId);
router.get('/company/:id',diagnostic.readLastDiagnosticByCompanyId);
router.get('/:id',diagnostic.read);

export default router;
