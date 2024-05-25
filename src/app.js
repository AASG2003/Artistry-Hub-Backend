import express from "express";
import morgan from "morgan";
import router from "./routes/userRoutes.js"

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use('/api', router);


export default app;