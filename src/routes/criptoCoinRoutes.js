import express from 'express'
import { getAllCriptoCoin, getCriptoCoinByName, getCriptoCoinBySigla, createCriptoCoin } from '../controllers/criptoCoinsController.js'
import verifyToken from '../config/verifyTconfig.js'
const router = express.Router()

//Gets
router.get('/getCoins',verifyToken,getAllCriptoCoin)
router.post('/getCoins/findName',verifyToken, getCriptoCoinByName)
router.post('/getCoins/findSigla',verifyToken,getCriptoCoinBySigla)
router.post('/createCoins',verifyToken, createCriptoCoin)
//post

export default router