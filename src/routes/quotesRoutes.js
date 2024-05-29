import express from 'express'
import { getAllquotes, getquoteById, createquote } from '../controllers/quotesController.js'

const router = express.Router()

//post
router.get('/getquotes',getAllquotes)
router.post('/getquotes/findId', getquoteById)
router.post('/createquote', createquote)


export default router