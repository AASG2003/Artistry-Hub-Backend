
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
        const users = await User.findAll({
            where: {
                id_usuario:{
                    [Op.eq] : req.params.id,
                }
            }
        });
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({message: 'Error general', error});
    }
}

export { getAllUsers, getUserById};


// Puedes agregar más controladores como createUser, updateUser, deleteUser, etc.


