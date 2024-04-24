import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import projectRouter from"./routes/projectRoute.js"
//app config
dotenv.config()
const app = express()
const port = process.env.PORT || 8001
mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log("DB Connected");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/project",projectRouter)
//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))