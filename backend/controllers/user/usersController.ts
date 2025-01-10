import { Request, Response } from 'express';
import { register } from '../../services/users/usersServices';

export const registerUsersController = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await register(req.body)
    return res.status(201).json(response);
  } catch (error: any) {
    const message = error.message.replace(/^Error:\s*/, "");
    return res.status(400).json({ error: message });
  }
}