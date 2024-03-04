import { Router } from 'express';
import option from '../controllers/optionController.js';
const router = Router();

router.post('/',option.create);
router.get('/:id',option.read);
router.put('/',option.update);
router.delete('/:id', option.destroy);

export default router;