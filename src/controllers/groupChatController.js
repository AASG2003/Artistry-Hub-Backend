import {groupChat} from "../models/chats_grupales.js"
import { Op } from "sequelize"

const getAllGroupChat = async(req, res) =>{
    try{
        const groups = await groupChat.findAll()
        res.status(200).json({message:groups})
    }catch(error){
        res.status(500).json({message:"error:",error})
    }
}

const getGroupChatByName = async(req, res) =>{
    try{
        const {nombre} = req.body
        const group = await groupChat.findOne({
            where:{
                nombre_chat:{
                    [Op.eq] : nombre
                }   
            }
        })
        if(group !== null){
            res.status(200).json({message:"grupo encontrado", "verification": "true"})
        }else{
            res.status(200).json({message:"grupo no encontrado", "verification": "false"})
        }
    }catch(error){
        res.status(500).json({message:error})
    }
}

const createGroupChat = async (req, res) =>{
    try{
        const createGroup = await groupChat.create(req.body)
        createGroup.save()
        res.status(200).json({message: createGroup})
    }catch(error){
        res.status(500).json({message: error})
    }
}

export {getAllGroupChat, getGroupChatByName, createGroupChat}