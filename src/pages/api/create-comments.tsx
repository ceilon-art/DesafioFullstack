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

  // let postID = req.query.id as string;

  // const newPostId = parseInt(postID)

  const { comment }:
    {
      comment: string;
    } = req.body;

  try {
    await prisma.comment.create({
      data: {
        comment,
      }
    });
    res.status(200).json({ messageSuccessful: 'Comentário adicionado com sucesso'});
  } catch {
    res.status(400).json({ error: 'Bad request' })
  }  
};