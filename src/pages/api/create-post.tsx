import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  messageSuccessful: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const prisma = new PrismaClient();

  const { message }:
    {
      message: string;
    } = req.body;

  try {
    await prisma.post.create({
      data: {        
        message,
      }
    });
    res.status(200).json({ messageSuccessful: 'Post criado com sucesso'});
  } catch {
    res.status(400).json({ error: 'Bad request' })
  }  
};