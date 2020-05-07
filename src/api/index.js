import { Router } from 'express';

import event from './event';

const router = Router();

router.use('/event', event);

export default router;
