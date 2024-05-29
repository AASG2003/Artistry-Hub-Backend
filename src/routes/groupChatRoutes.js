import verifyToken from "../config/verifyTconfig.js";
import { getAllGroupChat, getGroupChatByName, createGroupChat} from "../controllers/groupChatController.js";
import express from "express"


const router = express.Router();

router.get('/groupsChat', verifyToken,getAllGroupChat)
router.post('/groupsChat/findName',verifyToken, getGroupChatByName)
router.post('/createGroupChat', verifyToken,createGroupChat)


export default router