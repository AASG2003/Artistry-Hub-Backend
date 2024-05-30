import express from 'express'
import { getAllCriptoCoin, getCriptoCoinByName, getCriptoCoinBySigla, createCriptoCoin, getCriptoCoins} from '../controllers/criptoCoinsController.js'
import verifyToken from '../config/verifyTconfig.js'
const router = express.Router()

//rutas para MySQL
router.get('/getCoins',getAllCriptoCoin)
router.post('/getCoins/findName',verifyToken, getCriptoCoinByName)
router.post('/getCoins/findSigla',verifyToken,getCriptoCoinBySigla)
router.post('/createCoins',verifyToken, createCriptoCoin)

//rutas de mongoDb para obtener el precio de una criptomoneda
router.get('/getCoinsPrice', verifyToken, getCriptoCoins)

export default router