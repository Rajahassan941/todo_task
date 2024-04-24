import express from "express"
import requireAuth from "../middleware/requireAuth.js";
import { addProject, getProject, removeProject } from "../controllers/projectController.js";
const router = express.Router();

router.post("/addProject", requireAuth, addProject)
router.get("/getProject",requireAuth, getProject)
router.get("/removeTask",requireAuth, removeProject)

export default router;