import express from "express";
import cors from "cors";
import morgan from "morgan";

import { DB_NAME, MONGO_URI, PORT } from "./src/settings/config.js"; 
import { startConnection } from "./src/settings/database.js";

import { authRouter } from './src/routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/auth', authRouter);

app.listen(PORT, async () => {
    await startConnection({uri:MONGO_URI, database:DB_NAME})
    console.log(`Servidor iniciado en : http://localhost:${PORT}`)
})
    


  