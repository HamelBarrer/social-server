import { Router } from 'express';
import { createUser, getUser, getUsers } from '../controller/user.controller';
import { validationAuth } from '../middleware/validationAuth';

const router = Router();

router.get('/:userId', validationAuth, getUser);
router.get('/', validationAuth, getUsers);
router.post('/', validationAuth, createUser);

export default router;
