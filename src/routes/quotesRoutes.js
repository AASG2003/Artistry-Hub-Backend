import express from 'express'
import { getAllquotes, getquoteById, createquote } from '../controllers/quotesController.js'

const router = express.Router()


router.get('/getquotes',getAllquotes)
router.get('/getquotes/:id', getquoteById)
//post
router.post('/createquote', createquote)


export default router