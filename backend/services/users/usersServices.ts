import { Users } from "../../models/usersModel";
import bcrypt from "bcrypt"
import { Message } from "../../utils/message"
//import jwt from "jsonwebtoken"

interface IUser {
  id: number;
  user_type_id: number;
  name: string;
  lastname: string;
  docnum: string;
  email: string;
  password: string;
  address: string;
  neighborhood?: string;
  city: string;
  state: string;
  icon?: string;
  thumbnail?: string;
  phone: string;
}

export const register = async (data: IUser) => {
  try {
    const userExist = await Users.findOne({ where: { email: data.email } });
    if (userExist) {
      throw new Error("E-mail já cadastrado.");
    }
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    const userCreate = await Users.create({ ...data, password: hashedPassword });
    return new Message(userCreate, `Bem-vindo ${data.name}!`)
  } catch (error: any) {
    throw new Error(error.message);
  }

}