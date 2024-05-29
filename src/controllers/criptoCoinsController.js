import {criptoCoins} from '../models/criptomonedas.js'
import { Op } from 'sequelize'
const getAllCriptoCoin = async(req, res) =>{
    try{
        const coins = await criptoCoins.findAll()

        res.status(200).json({"message": coins})
    }catch(error){
        res.status(500).json({"error": "error:" ,error})
    }
}


const getCriptoCoinBySigla = async(req,res) =>{
    try{
        const {siglas} = req.body
        console.log(siglas)
        const coin = await criptoCoins.findOne({
            where:{
                siglas:{
                    [Op.eq]: siglas
                }
            }
        })
        if(coin !== null){
            res.status(200).json({message:"criptomoneda encontrado", "verification": "true"})
        }else{
            res.status(200).json({message:"criptomoneda no encontrado", "verification": "false"})
        }
    }catch(error){
        res.status(500).json({"error": "error", coin})
    }
}

const getCriptoCoinByName = async(req,res) =>{
    try{
        const {nombre} = req.body
        const coin = await criptoCoins.findOne({
            where:{
                nombre:{
                    [Op.eq]: nombre
                }
            }
        })
        if(coin !== null){
            res.status(200).json({message:"criptomoneda encontrado", "verification": "true"})
        }else{
            res.status(200).json({message:"criptomoneda no encontrado", "verification": "false"})
        }
    }catch(error){
        res.status(500).json({"error": "error", coin})
    }
}

const createCriptoCoin = async(req, res) =>{
    try{
        const coin = await criptoCoins.create(req.body)
        coin.save()
        res.status(200).json({message:coin})
    }catch(error){
        res.status(500).json({"error": "error:", error})
    }
}

//export all functions
export {getAllCriptoCoin, getCriptoCoinBySigla, getCriptoCoinByName, createCriptoCoin}