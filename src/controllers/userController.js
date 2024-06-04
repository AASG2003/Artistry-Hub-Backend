import { Op, ValidationError } from "sequelize";
import { User } from "../models/usuarios.js";
import jwt from "jsonwebtoken";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    if(error == ValidationError){
      res.status(500).json({message:"error en la base de datos", error})
    }else{
      res.status(500).json({ message: 'Error fetching users', error });
    }
  }
};

const getUserById = async(req, res) =>{
    try{
      const {id} = req.body
        const users = await User.findOne({
            where: {
                id_usuario:{
                    [Op.eq] : id
                }
            }
        });
      if(id !== null){
        res.status(200).json({message:"usuario encontrado" , verfication:"true"})
      }else{
        res.status(200).json({message:"usuario no encontrado" , verfication:"true"})
      }
      res.status(200).json(users);
    } catch(error){
      if(error == ValidationError){
        res.status(500).json({message:"error en la base de datos", error})
      }else{
        res.status(500).json({message: 'Error general', error}); 
      }
    }
}

const createUser = async(req, res) => {
  try{
    const user = await User.create(req.body)
    user.save()
    res.status(200).json({user})
  }catch(error){
    if(error == ValidationError){
      res.status(500).json({message:"error en la base de datos", error})
    }else{
      res.status(500).json({message: 'Error general: ' , error})
    }
  }
}

const loginUser = async(req, res) =>{
  const {nombre, contrasena} = req.body
  try{
    const login = await User.findOne({
      where:{
        [Op.and]:[{nombre_usuario: nombre},{contrasena :contrasena}]
      }
    })
    if(login !== null){
      const user = {id_usuario: login.id_usuario, nombre: login.nombre_usuario}
      console.log(user)
      const token = jwt.sign(user, 'secretKey', {expiresIn: '5m'})
      res.status(200).json({message:"usuario encontrado", "verification": "true", token})
    }else{
      if(error == ValidationError){
        res.status(500).json({message:"error en la base de datos", error})
      }else{
        res.status(200).json({message:"usuario no encontrado", "verification": "false"})
      }
    }
  }catch(error){
    if(error == ValidationError){
      res.status(500).json({message:"error en la base de datos", error})
    }else{
      res.status(500).json({error})
    }
  }
}
const paginateUsers = async(req, res) =>{
  try{
    const {size, pags} = req.body
    const pagUser = await User.findAll({
      limit: size,
      offset: size * pags
    })
    res.status(200).json({message: "Datos enviados", pagUser})
  }catch(error){
    if(error == ValidationError){
      res.status(500).json({message:"error en la base de datos", error})
    }else{
      res.status(500).json({error})
    }
  }
}
export { getAllUsers, getUserById, createUser, loginUser, paginateUsers};