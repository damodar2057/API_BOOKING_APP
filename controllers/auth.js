import bcrypt from "bcryptjs";
import User from "../models/User.js"
import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js"
import dotenv from "dotenv"
dotenv.config();
//REGISTER
export const register= async (req,res,next)=>{
    const password=req.body.password;
    const salt=bcrypt.genSaltSync(10);
    const hashPassword=bcrypt.hashSync(password,salt);
    try{
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashPassword
        })
        await newUser.save();
        res.status(200).json("User has been registered succesfully!!!");
    }catch(err){
        next(err);
    }
    }
//LOGIN
export const login=async (req,res,next)=>{
    try{

        const user=await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found!!!"));
        const checkPassword=await bcrypt.compareSync(req.body.password,user.password);
        if(!checkPassword) return next(createError(400,"Incorrect Credientials"));
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);
        const{ isAdmin,password,...otherDetails}=user._doc;
        res.cookie("access_token",token,{
           httpOnly:true
        }).status(200).json(otherDetails);
    }
    catch(err){
        next(err);
    }
}



    

