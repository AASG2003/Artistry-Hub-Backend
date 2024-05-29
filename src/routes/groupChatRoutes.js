import { getAllGroupChat, getGroupChatByName, createGroupChat} from "../controllers/groupChatController.js";
import express from "express"


const router = express.Router();

router.get('/groupsChat', getAllGroupChat)
router.post('/groupsChat/findName', getGroupChatByName)
router.post('/createGroupChat', createGroupChat)


export default router