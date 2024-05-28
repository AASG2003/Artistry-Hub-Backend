import express from 'express'
import { getAllCriptoCoin, getCriptoCoinByName, getCriptoCoinBySigla, createCriptoCoin } from '../controllers/criptoCoinsController.js'
const router = express.Router()

//Gets
router.get('/getCoins', getAllCriptoCoin)
router.get('/getCoins/:nombre', getCriptoCoinByName)
router.get('/getCoins/:siglas', getCriptoCoinBySigla)
router.post('/createCoins', createCriptoCoin)
//post

export default router