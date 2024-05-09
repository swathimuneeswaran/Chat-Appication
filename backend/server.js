import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userRoutes.js"
import { app ,server} from './socket/socket.js';
import connectDB from './db/mongoConnect.js';
dotenv.config()

const PORT=process.env.PORT || 8000

const __dirname=path.resolve()

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend", "dist" ,"index.html"))
})


// app.get('/',(req,res)=>{
//     console.log("printing...");
//     res.send('hello world');
// });



server.listen(5000,()=>{ 
    connectDB();
    console.log(`listening on port ${PORT}`);
});