import express from 'express';
import { getUserTypesController } from "../controllers/user-types/userTypesController";

export const router = express.Router();

router.get("/user-types", getUserTypesController);
