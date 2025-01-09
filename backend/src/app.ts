import express from 'express';
import cors from "cors";
import { router } from "../routes/routes"
import { sequelize } from '../config/db'

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
const port = 3001;


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida!');
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
    setTimeout(startServer, 5000);
  }
};

startServer();