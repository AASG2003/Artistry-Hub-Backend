import express from "express";
import morgan from "morgan";
import routerUser from "./routes/userRoutes.js"
import routerGroupChat from './routes/groupChatRoutes.js'
import routerCriptoCoins from './routes/criptoCoinRoutes.js'
import routerQuote from './routes/quotesRoutes.js'
const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use('/api', routerUser);
app.use('/api',routerGroupChat)
app.use('/api', routerCriptoCoins)
app.use('/api', routerQuote)


export default app;