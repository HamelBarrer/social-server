import { Router } from 'express';
import { createUser, getUser, getUsers } from '../controller/user.controller';

const router = Router();

router.get('/:userId', getUser);
router.get('/', getUsers);
router.post('/', createUser);

export default router;
