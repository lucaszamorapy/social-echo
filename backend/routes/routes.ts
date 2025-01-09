import express from 'express';
import { getUserTypesController } from "../controllers/user-types/userTypesController";

export const router = express.Router();

// Definindo a rota corretamente
router.get("/user-types", getUserTypesController);
