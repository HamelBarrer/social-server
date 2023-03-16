import { Request, Response } from 'express';
import { insertUser, readUser, readUsers } from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  const data = readUser(userId);
  if (!data) return res.status(404).json({ data: 'User not found' });

  return res.status(200).json({ data });
};

export const getUsers = async (_: Request, res: Response) => {
  const data = await readUsers();
  if (!data) return res.status(204).json({ data: 'Not user' });

  return res.status(200).json({ data });
};

export const createUser = async (req: Request, res: Response) => {
  const data = await insertUser(req.body);

  return res.status(200).json({ data });
};
