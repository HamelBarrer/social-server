import { Router } from 'express';

import {
  readUser,
  readUsers,
  insertUser,
  updateUser,
} from '../controllers/userController.js';

const router = Router();

router.get('/:user_id', readUser);

router.get('/', readUsers);

router.post('/', insertUser);

router.put('/:user_id', updateUser);

export default router;
