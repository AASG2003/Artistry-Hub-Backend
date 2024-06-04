import { quotes } from "../models/cotizaciones.js";
import { Op } from "sequelize";

const getAllquotes = async(req, res) =>{
    try{
        const quote = await quotes.findAll()
        res.status(200).json({message: quote})
    }catch(error){
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"error": error})
        }
    }
}

const getquoteById = async(req, res) =>{
    try{
        const {id_cotizacion} = req.body
        const quote = await quotes.findOne({
            where:{
                id_cotizacion:{
                    [Op.eq] : id_cotizacion
                }
            }
        })
        if(quote !== null){
            res.status(200).json({message:"cotizacion encontrado", "verification": "true"})
        }else{
            if(error == ValidationError){
                res.status(500).json({message:"error en la base de datos", error})
            }else{
                res.status(200).json({message:"cotizacion no encontrado", "verification": "false"})
            }
        }
    }catch(error){
        console.log(error)
        res.status(500).json({"error": error})
    }
}

const createquote = async(req, res) =>{
    try{
        const quote = await quotes.create(req.body);
        quote.save()
        res.status(200).json({message: quote})
    }catch(error){
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"message": "error encontrado", error})
        }
    }
}
export {getAllquotes, getquoteById, createquote}