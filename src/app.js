import express from "express";
import morgan from "morgan";
import routerUser from "./routes/userRoutes.js"
import routerGroupChat from './routes/groupChatRoutes.js'
import routerCriptoCoins from './routes/criptoCoinRoutes.js'
import routerQuote from './routes/quotesRoutes.js'
import { MongoClient } from "mongodb";
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


app.use(morgan('dev'))
app.use(express.json());
app.use('/api', routerUser);
app.use('/api',routerGroupChat)
app.use('/api', routerCriptoCoins)
app.use('/api', routerQuote)

app.get('/obtener_precios_cripto', async (req, res) => {
    const { resul } = req.query;
    const tiempo = new Date().toISOString().slice(0, 10);
    const nombreColeccion = "cripto_consulta";
    
    try {
      const db = req.db;
      const coleccion = db.collection(nombreColeccion);
  
      // Consultar los datos en la colección
      const resultado = await coleccion.find({activo:resul}).toArray();
      if (resultado) {
        res.json(resultado);
      } else {
        res.status(404).json({ error: "El activo especificado no fue encontrado." });
      }
    } catch (error) {
      console.error('Error al consultar la base de datos:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });

export default app;