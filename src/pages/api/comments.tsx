import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async  (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const prisma = new PrismaClient();

  const allComments = await prisma.comment.findMany({
    select: {
      comment: true,
    }
  })
    
  res.status(200).json(allComments)
}