import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser"

const app=express();

//middlewares
app.use(cookieParser()); 
app.use(express.json());
app.use("/api/hotels",hotelsRoute);
app.use("/api/auth",authRoute);
// app.use("/api/rooms",roomsRoute);
app.use("/api/users",userRoute);
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage = err.message || "Something went wrong !!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

//Connection to the database  
const connect=async ()=>{
    try{
        console.log("hello")
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to the Database!!")

    }catch(err){
        console.log("Unable to connect to  the database!!!")
    }
}
connect();
app.listen(8800,()=>{
    console.log("Server is Running!!")
})