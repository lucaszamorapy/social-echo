import { Request, Response } from 'express';
import { getUserTypes } from "../../services/user-types/userTypesService";

export const getUserTypesController = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await getUserTypes();
    return res.status(200).json(response);
  } catch (error: any) {
    const message = error.message.replace(/^Error:\s*/, "");
    return res.status(400).json({ error: message });
  }
};
