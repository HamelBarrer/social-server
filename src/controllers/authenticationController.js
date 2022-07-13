import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send('there is empty information');

  const user = await User.findOne({
    attributes: ['user_id', 'username', 'password'],
    where: {
      username,
    },
  });
  if (!user) return res.status(404).send('user or password incorrect');

  const passwordEquals = await argon2.verify(user.password, password);
  if (!passwordEquals)
    return res.status(404).send('user or password incorrect');

  const token = jwt.sign({ user_id: user.user_id }, process.env.SECURITY_PAS);

  res.status(200).send({ token: token });
};
