import express from "express"
import { addTask, getTaskbyProjectId, removeTask, updateTaskStatus} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/addTask", requireAuth, addTask)
router.get("/getTask",requireAuth, getTaskbyProjectId)
router.get("/removeTask",requireAuth, removeTask)
router.patch("/updateTask",requireAuth, updateTaskStatus)

export default router;