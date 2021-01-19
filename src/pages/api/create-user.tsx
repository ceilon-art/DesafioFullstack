import { NextApiRequest, NextApiResponse } from 'next';

import initMiddleware from '../../utils/Middlewares/initMiddleware';
import validateMiddleware from '../../utils/Middlewares/validateMiddleware';
import { check, body, ValidationError, validationResult } from 'express-validator';

import { PrismaClient } from '@prisma/client';

interface ValidateResponseType {
  errors: ValidationError[];
}

interface ErrorResponseType {
  error: string;
}

interface User {
  name: string;
  email: string;
  emailVerified: string;
}

const validateBody = initMiddleware(
  validateMiddleware([
      check('name').isLength({min: 1, max: 40}),
      body('email').isEmail().normalizeEmail(),
      check('email').isLength({ min: 1 }), 
  ], validationResult)
)

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | User | ValidateResponseType>
): Promise<void> => {
  const prisma = new PrismaClient();

  const {
    name,
    email,
    emailVerified
  }: {
      name: string;
      email: string;
      emailVerified: string;
  } = req.body;

  const lowerCaseEmail = email.toLowerCase();

  const emailVerifiedLowerCase = emailVerified.toLowerCase();

  const emailAlreadyExists = await prisma.user.findUnique({
    where: {
      email: lowerCaseEmail
    },
  });

  if (emailAlreadyExists) {
    res
      .status(400)
      .json({ error: `E-mail ${lowerCaseEmail} already exists` });
    return;
  }


  if (emailVerifiedLowerCase !== lowerCaseEmail) {
    return res.status(400).json({ error: `E-mail e confirmação de e-mail não conferem` })
  }

  if (req.method === "POST") {
    await validateBody(req, res)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
  }

  try {
    const response = await prisma.user.create({
      data: {
        name,
        email: lowerCaseEmail,
        emailVerified: lowerCaseEmail,
      }
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err)
  }
};