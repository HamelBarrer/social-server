import { Router } from 'express';

import {
  readUser,
  readUsers,
  insertUser,
  updateUser,
} from '../controllers/userController.js';

import { verificationToken } from '../middleware/verificationToken.js';

const router = Router();

router.get('/:user_id', verificationToken, readUser);

router.get('/', readUsers);

router.post('/', insertUser);

router.put('/:user_id', updateUser);

export default router;
