import {criptoCoins} from '../models/criptomonedas.js'

const getAllCriptoCoin = async(req, res) =>{
    try{
        const coins = criptoCoins.findAll()

        res.status(200).json({message: coins})
    }catch(error){
        res.status(500).json({"error": "error:" ,error})
    }
}


const getCriptoCoinBySigla = async(req,res) =>{
    try{
        const coin = await criptoCoins.findAll({
            where:{
                siglas:{
                    [Op.eq]: req.params.siglas
                }
            }
        })
        res.status(200).json({message:coin})
    }catch(error){
        res.status(500).json({"error": "error", coin})
    }
}

const getCriptoCoinByName = async(req,res) =>{
    try{
        const coin = await criptoCoins.findAll({
            where:{
                nombre:{
                    [Op.eq]: req.params.nombre
                }
            }
        })
        res.status(200).json({message:coin})
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