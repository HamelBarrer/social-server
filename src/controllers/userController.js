import argon2 from 'argon2';

import { User } from '../models/user.js';

export const readUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findByPk(user_id, {
    attributes: ['user_id', 'username'],
  });
  if (!user) return res.status(404).send('user not found.');

  res.status(200).send(user);
};

export const readUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['user_id', 'username', 'is_active'],
    where: {
      is_active: true,
    },
  });

  res.status(200).send(users);
};

export const insertUser = async (req, res) => {
  const { username, password, password_confirm } = req.body;

  if (!username.trim()) return res.status(400).send('username cannot be empty');
  if (!password.trim()) return res.status(400).send('password cannot be empty');
  if (!password_confirm.trim())
    return res.status(400).send('password confirm cannot be empty');

  if (password.trim() !== password_confirm.trim())
    return res.status(400).send('passwords are not the same');

  const hash = await argon2.hash(password);
  const user = await User.create({ username, password: hash });

  res.status(201).send(user);
};

export const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { username } = req.body;

  if (!username.trim()) return res.status(400).send('username cannot be empty');

  const user = await User.update(
    { username },
    {
      where: {
        user_id,
      },
    }
  );

  res.status(201).send(user);
};
