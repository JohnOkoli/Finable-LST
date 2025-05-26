import { Request, Response } from 'express';
import { createAccount } from '../services/accountService';

export const createAccountHandler = async (req: Request, res: Response) => {
  try {
    console.log('createAccountHandler', req.body);
    const account = await createAccount(req.body);
    if (!account) {
      res.status(400).json({ message: 'Account creation failed' }); 
      return;
    } 
    res.status(201).json({ message: 'Account created successfully', account });
  } catch (error) { 
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({message: 'Failed to create account', error: errorMessage });
  }
};
