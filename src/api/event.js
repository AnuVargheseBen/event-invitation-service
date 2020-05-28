import { Router } from 'express';

import {save , getDocuments, getDocument,deleteEvent,updateEvent} from '../controllers/event';
const router = Router();

router.post('/',save);
router.get('/',getDocuments);
router.get('/:id',getDocument);
router.delete('/:id',deleteEvent);
router.patch('/:id',updateEvent);
export default router;
