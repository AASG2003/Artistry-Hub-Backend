import express from "express";
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(cors())
//here is the routes


app.use(morgan('dev'))
app.use(express.json());


app.use((req, res, nex)=>{
  res.status(404).json({message:"Recurso no encontrado"})
})

app.use((req, res, next) => {
  res.status(501).json({ message: 'Método no implementado' });
});
export default app;