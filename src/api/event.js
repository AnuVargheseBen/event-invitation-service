import { Router } from 'express';

import {save , getDocuments, getDocument } from '../controllers/event';
const router = Router();

router.post('/',save);
router.get('/',getDocuments);
router.get('/:id',getDocument);
export default router;
