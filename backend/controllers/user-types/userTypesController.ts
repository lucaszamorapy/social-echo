import { Request, Response } from 'express';
import { getUserTypes } from "../../services/user-types/userTypesService";

export const getUserTypesController = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await getUserTypes();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: "Ocorreu um erro ao obter os tipos de usuários." });
  }
};
