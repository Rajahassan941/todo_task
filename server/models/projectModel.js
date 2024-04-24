import mongoose from "mongoose";
const projectInstance = mongoose.Schema({
    title:{type:String, required:true},
}, {timestamps:true});

const projectModel = mongoose.model("Project", projectInstance);
export default projectModel;