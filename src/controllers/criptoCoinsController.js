import {criptoCoins} from '../models/criptomonedas.js'
import { Op } from 'sequelize'


//consultas para MySQL
const getAllCriptoCoin = async(req, res) =>{
    try{
        const coins = await criptoCoins.findAll()

        res.status(200).json({"message": coins})
    }catch(error){
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"error": "error:" ,error})
        }
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
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"error": "Error", coin})
        }
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
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"error": "error", coin})
        }
    }
}

const createCriptoCoin = async(req, res) =>{
    try{
        const coin = await criptoCoins.create(req.body)
        coin.save()
        res.status(200).json({message:coin})
    }catch(error){
        if(error == ValidationError){
            res.status(500).json({message:"error en la base de datos", error})
        }else{
            res.status(500).json({"error": "Error:", error})
        }
    }
}

//controlador para consultas mongoDB
const getCriptoCoins = async(req, res) =>{
    const { resul } = req.query;
    const nombreColeccion = "cripto_consulta";
    
    try {
        const db = req.db;
        const coleccion = db.collection(nombreColeccion);

      // Consultar los datos en la colección
        const resultado = await coleccion.find({activo:resul}).toArray();
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: "El activo especificado no fue encontrado." });
        }
        } catch (error) {
            if(error == ValidationError){
                res.status(500).json({message:"error en la base de datos", error})
            }else{
                console.error('Error al consultar la base de datos:', error);
                res.status(500).json({ error: 'Error en el servidor' });
            }
        }
}
//export all functions
export {getAllCriptoCoin, getCriptoCoinBySigla, getCriptoCoinByName, createCriptoCoin, getCriptoCoins}