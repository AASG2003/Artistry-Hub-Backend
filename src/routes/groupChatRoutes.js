import { getAllGroupChat, getGroupChatById, createGroupChat} from "../controllers/groupChatController.js";
import express from "express"


const router = express.Router();

router.get('/groupsChat', getAllGroupChat)
router.get('/groupsChat/:nombre', getGroupChatById)
router.post('/createGroupChat', createGroupChat)


export default router