import { UserTypes } from "../../models/userTypesModel"
import { Message } from "../../utils/message";


export const getUserTypes = async () => {
  try {
    const users = await UserTypes.findAll()
    return new Message(users, "Tipos dos usuários carregados com sucesso!")
  } catch (error: any) {
    throw new Error(error);
  }
}