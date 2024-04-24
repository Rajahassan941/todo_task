import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const addTask = async (req, res) => {
    const { title, description,projectID } = req.body;
    const userId = req.user.id;
    const user = await userModel.find({_id: userId});
    const newTask = new taskModel({ title, description, completed: false, userId,projectID})
    newTask.save()
        .then(() => {
            return (res.status(200).json({ message: "Task added successfully" }))
        })
        .catch((error) => {
            return (
                res.status(500).json({ message: error.message })
            )
        }
        )
}
const removeTask = (req, res) => {
    const { id } = req.body;
    console.log("id: ", id);
    taskModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: "Task deleted successfully" }))
        .catch((error) => res.status(501).json({ message: error.message }))
}

const getTaskbyProjectId = (req, res) => {
    taskModel.find({ projectId: req.body.projectId })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(501).json({ message: error.message }))
}
const updateTaskStatus = (req, res) => {
    const { id, completed } = req.body;
    taskModel.findByIdAndUpdate(id, { completed }, { new: true })
        .then((updatedTask) => {
            if (!updatedTask) {
                return res.status(404).json({ message: "Task not found" });
            }
            return res.status(200).json({ message: "Task status updated successfully", updatedTask });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
}

export { addTask, getTaskbyProjectId,removeTask,updateTaskStatus }