// routes/userRoutes.js
import express from "express"

import { createUser, getAllUsers, getUserById, loginUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users/findBy', getUserById);
router.post('/createuser', createUser);
router.post('/createuser/login', loginUser);

// Puedes agregar más rutas como post, put, delete, etc.

export default router;
