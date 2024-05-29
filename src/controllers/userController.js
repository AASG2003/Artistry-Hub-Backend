import { Op } from "sequelize";
import { User } from "../models/usuarios.js";
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
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
      res.status(500).json({message: 'Error general', error}); 
    }
}

const createUser = async(req, res) => {
  try{
    const user = await User.create(req.body)
    user.save()
    res.status(200).json({user})
  }catch(error){
    res.status(500).json({message: 'Error general: ' , error})
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
    //console.log(login.contrasena)
    if(login !== null){
      res.status(200).json({message:"usuario encontrado", "verification": "true"})
    }else{
      res.status(200).json({message:"usuario no encontrado", "verification": "false"})
    }
  }catch(error){
    console.log(error)
    res.status(500).json({"error": "error:", error})
  }
}

export { getAllUsers, getUserById, createUser, loginUser};


// Puedes agregar más controladores como createUser, updateUser, deleteUser, etc.


