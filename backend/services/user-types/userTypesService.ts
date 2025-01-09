import { UserTypes } from "../../models/userTypesModel"


export const getUserTypes = async () => {
  try {
    return await UserTypes.findAll()
  } catch (error: any) {
    throw new Error(error);
  }
}