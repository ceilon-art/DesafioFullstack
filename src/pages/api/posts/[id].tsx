import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async  (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const prisma = new PrismaClient();

  let postId = req.query.id as string;

  const newPostId = parseInt(postId)

  if (!postId) {
    res.status(400).json({ error: "Missing PostId on request body" })
    return;
  }    

  const response = await prisma.post.findUnique({
    where: {
      id: newPostId,
    },
    select: {
      id: true,
      message: true,
      comments: true,
    }
  })

  if (!response) {
    res.status(400).json({ error: "Post not found" })
    return; 
  }

  res.status(200).json(response)
}