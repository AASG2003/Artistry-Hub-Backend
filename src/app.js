import express from "express";
import morgan from "morgan";
import routerUser from "./routes/userRoutes.js"
import routerGroupChat from './routes/groupChatRoutes.js'
import routerCriptoCoins from './routes/criptoCoinRoutes.js'
import routerQuote from './routes/quotesRoutes.js'
import { MongoClient } from "mongodb";
import cors from "cors"

const app = express();

app.use(async (req, res, next) => {
    try {
      const client = await MongoClient.connect(process.env.DB_NOSQL);
      const db = client.db(process.env.DB_NOSQL_NAME);
      req.db = db;
      next();
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error);
      res.status(500).json({ error: 'Error en el servidor' + error });
    }
});

app.use(cors())

app.use(morgan('dev'))
app.use(express.json());
app.use('/api', routerUser);
app.use('/api',routerGroupChat)
app.use('/api', routerCriptoCoins)
app.use('/api', routerQuote)
export default app;