import { Router } from 'express';

import {save , getDocument } from '../controllers/event';
const router = Router();

router.post('/',save);
router.get('/',getDocument);
export default router;
