// routes/userRoutes.js
import express from "express"

import { getAllUsers, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

// Puedes agregar más rutas como post, put, delete, etc.

export default router;
