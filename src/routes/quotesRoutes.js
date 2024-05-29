import express from 'express'
import verifyToken from '../config/verifyTconfig.js'
import { getAllquotes, getquoteById, createquote } from '../controllers/quotesController.js'

const router = express.Router()

//post
router.get('/getquotes',verifyToken, getAllquotes)
router.post('/getquotes/findId',verifyToken, getquoteById)
router.post('/createquote',verifyToken ,createquote)


export default router