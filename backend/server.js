import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from './db/mongoConnect.js';
dotenv.config()
const app=express();
const PORT=process.env.PORT || 8000

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get('/',(req,res)=>{
//     console.log("printing...");
//     res.send('hello world');
// });



app.listen(5000,()=>{ 
    connectDB();
    console.log(`listening on port ${PORT}`);
});