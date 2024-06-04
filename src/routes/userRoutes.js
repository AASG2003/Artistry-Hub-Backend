// routes/userRoutes.js
import express from "express"
import verifyToken from '../config/verifyTconfig.js'

import { createUser, getAllUsers, getUserById, loginUser, paginateUsers} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', verifyToken,getAllUsers);
router.post('/users/findBy',verifyToken, getUserById);
router.post('/createuser',verifyToken,createUser);
router.post('/users/login',loginUser);
router.post('/users/paginateUser', paginateUsers)
// Puedes agregar más rutas como post, put, delete, etc.

export default router;
