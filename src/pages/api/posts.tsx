import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async  (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const prisma = new PrismaClient();

  const allPosts = await prisma.post.findMany({
    select: {
      comments: true,
      id: true,
      message: true,
    }
  })
    
  res.status(200).json(allPosts)
}