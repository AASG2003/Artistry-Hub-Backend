import {groupChat} from "../models/chats_grupales.js"


const getAllGroupChat = async(req, res) =>{
    try{
        const groups = await groupChat.findAll()
        res.status(200).json({message:groups})
    }catch(error){
        res.status(500).json({message:"error:",error})
    }
}

const getGroupChatById = async(req, res) =>{
    try{
        const group = await groupChat.findAll({
            where:{
                nombre_chat:{
                    [Op.eq] : req.params.nombre
                }   
            }
        })
        console.log(group)
        res.status(200).json({message: group})
    }catch(error){
        res.status(500).json({message:'error:', error})
    }
}

const createGroupChat = async (req, res) =>{
    try{
        const createGroup = await groupChat.create(req.body)
        createGroup.save()
        res.status(200).json({message: createGroup})
    }catch(error){
        res.status(500).json({message: 'error:', error})
    }
}

export {getAllGroupChat, getGroupChatById, createGroupChat}