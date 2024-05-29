import express from 'express'
import { getAllCriptoCoin, getCriptoCoinByName, getCriptoCoinBySigla, createCriptoCoin } from '../controllers/criptoCoinsController.js'
const router = express.Router()

//Gets
router.get('/getCoins', getAllCriptoCoin)
router.post('/getCoins/findName', getCriptoCoinByName)
router.post('/getCoins/findSigla', getCriptoCoinBySigla)
router.post('/createCoins', createCriptoCoin)
//post

export default router