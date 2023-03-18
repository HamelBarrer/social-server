import { Request, Response } from 'express';
import { getUserEmailOrUsername } from '../services/user.service';
import { validationHash } from '../utils/hash';
import { creationToken } from '../utils/token';

export const login = async (req: Request, res: Response) => {
  const { account, password } = req.body;
  if (!account) return res.status(400).json({ data: 'Account is required' });
  if (!password) return res.status(400).json({ data: 'Password is required' });

  const user = await getUserEmailOrUsername(account);
  if (!user)
    return res.status(400).json({ data: 'Account or password incorrect' });

  if (await !validationHash(password, user.password))
    return res.status(400).json({ data: 'Account or password incorrect' });

  const jwt = await creationToken(user.userId);

  return res.status(200).json({
    data: {
      jwt,
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
};
