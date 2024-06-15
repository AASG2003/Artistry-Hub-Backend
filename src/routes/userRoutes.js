// routes/userRoutes.js
import express from "express"
import verifyToken from '../config/verifyTconfig.js'

import { createUser, getAllUsers, getUserById, loginUser, paginateUsers, forgotPassword, RefreshPassword} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', verifyToken,getAllUsers);
router.post('/users/findById',verifyToken, getUserById);
router.post('/createuser',verifyToken,createUser);
router.post('/users/login',loginUser);
router.post('/users/paginateUser', paginateUsers)

router.post('/users/forgotPassword', forgotPassword)
router.post('/users/refreshPassword', RefreshPassword)

export default router;
