import { getNoticiasCompletas } from "../controllers/noticiascontroller.js";
import express from "express"
const router = express.Router()


router.get('/getNoticiaCompleta', getNoticiasCompletas)


export default router