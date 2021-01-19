import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const prisma = new PrismaClient();

  const { email: userEmail }:
    {
      email: string;
    } = req.body;

  const emailOfUser = await prisma.user.findUnique({
    where: {
      email: userEmail
    },
  })

  if (!emailOfUser) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  } else {
    return res.status(200).json({ messageSuccessful: 'Login bem sucedido' });
  }
};