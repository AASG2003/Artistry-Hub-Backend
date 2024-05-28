import { quotes } from "../models/cotizaciones.js";


const getAllquotes = async(req, res) =>{
    try{
        const quote = await quotes.findAll()
        res.status(200).json({message: quote})
    }catch(error){
        res.status(500).json({"error": "error:", error})
    }
}

const getquoteById = async(req, res) =>{
    try{
        const quote = await quotes.findAll({
            where:{
                id_cotizacion:{
                    [Op.eq] : req.params.id
                }
            }
        })
    }catch(error){
        res.status(500).json({"error": "error:",error})
    }
}

const createquote = async(req, res) =>{
    try{
        const quote = await quotes.create(req.body);
        quote.save()
        res.status(200).json({message: quote})
    }catch(error){
        res.status(500).json({"error": "error:" ,error})
    }
}
export {getAllquotes, getquoteById, createquote}