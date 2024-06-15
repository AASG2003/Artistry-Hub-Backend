import { Op, ValidationError, where } from "sequelize";
import { User } from "../models/usuarios.js";
import jwt from "jsonwebtoken";
import { transporter } from "../config/mailer.js";

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
        const user = await User.findOne({
            where: {
                id_usuario:{
                    [Op.eq] : id
                }
            }
        });
      if(user !== null){
        res.status(200).json({message:"usuario encontrado" , verification:"true"})
      }else{
        res.status(200).json({message:"usuario no encontrado" , verification:"true"})
      }
      res.status(200).json(user);
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
    await user.save()
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

const forgotPassword = async(req, res) =>{
  try{
    const {gmail} = req.body
    const finduser = await User.findOne({
      where:{
        email:{
          [Op.eq] : gmail
        }
      }
    })
    if(finduser){
      const info = await transporter.sendMail({
        from: "Maizena Hot <sergioantonioqui@gmail.com",
        to: gmail,
        subject:"Olvide mi constraseña",
        html:"<p>Hola, Se le ha enviado el link para poder reestablecer la constraseña<p><br><button><a href='http://localhost:3001/api/users/refreshPassword?new_password=cerditoh1234&old_password=cerditoh123'>Reestablecer constraseña</a></button>"
      })
      res.status(200).json({"message":"Envio Correcto", "send":"true"})
    }else{
      res.status(406).json({
        error: "No se encontro el gmail del usuario",
        send: "false"
      })
    }
  }catch(error){
    if(error.name == ValidationError){
      res.status(400).json({"Error": error , "message": "Error en la base de datos"})
    }else{
      res.status(500).json({"error general": error})
    }
  }
}

const RefreshPassword = async(req, res) =>{
  try{
    const { email, new_password } = req.body
    const resetuser = await User.findOne({
      where:{
        email :{
          [Op.eq] : email
        }
      }
    })
    if(resetuser){
      resetuser.contrasena = new_password
      const user = {id_usuario:resetuser.id_usuario, email:resetuser.email, constrasena:resetuser.constrasena}
      const token = jwt.sign(user, 'secretKey', {expiresIn: '5m'})
      await resetuser.save()
      res.status(200).json({"refreshed": "true", "new_token": token})
    }else{
      res.status(406).json({"message": "Error de verificacion"})
    }
  }catch(error){
    res.status(400).json({"message":"error general"})
  }
}

export { getAllUsers, getUserById, createUser, loginUser, paginateUsers, forgotPassword, RefreshPassword};