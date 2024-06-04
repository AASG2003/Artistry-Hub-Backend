import verifyToken from "../config/verifyTconfig.js";
import { getAllGroupChat, getGroupChatByName, createGroupChat, paginateGroupChat} from "../controllers/groupChatController.js";
import express from "express"


const router = express.Router();

router.get('/groupsChat', verifyToken,getAllGroupChat)
router.post('/groupsChat/findName',verifyToken, getGroupChatByName)
router.post('/groupsChat/paginateGroupChat', paginateGroupChat)
router.post('/createGroupChat', verifyToken,createGroupChat)


export default router