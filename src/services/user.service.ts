import { PrismaClient } from '@prisma/client';
import { CreateUser } from '../interfaces/user.interface';
import { creationHash } from '../utils/hash';

export const getUserEmailOrUsername = async (account: string) => {
  const prisma = new PrismaClient();

  const data = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: account,
        },
        {
          email: account,
        },
      ],
    },
  });

  return data;
};

export const readUser = async (userId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.user.findUnique({
    where: {
      userId,
    },
  });

  return data;
};

export const readUsers = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany();

  return data;
};

export const insertUser = async (user: CreateUser) => {
  const prisma = new PrismaClient();

  const password = await creationHash(user.password);

  const data = await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password,
    },
  });

  return data;
};
