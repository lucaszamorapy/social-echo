import express from 'express';
import { getUserTypesController } from "../controllers/user-types/userTypesController";
import { registerUsersController } from "../controllers/user/usersController"

export const router = express.Router();

router.get("/user-types", getUserTypesController);
router.post("/users/register", registerUsersController);
