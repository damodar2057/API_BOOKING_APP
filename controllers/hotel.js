import express from "express"
import Hotel from "../models/Hotel.js";

//CREATE
export const createHotel= async(req,res,next)=>{
    const newHotel=new Hotel(req.body);
    try{
        const savedHotel=await newHotel.save();
        res.status(200).json(savedHotel);
        console.log("Hotel is Created Successfully")

    }catch(err){
        next(err);
    }
}
//UPDATE
export const updateHotel= async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedHotel);
        console.log("Hotel is updated Successfully")
    }
    catch(err){
        next(err);
    }
}
//DELETE
export const deleteHotel= async(req,res,next)=>{
    try{
        const deletedhotel=await Hotel.findByIdAndDelete(req.params.id);
        console.log("Hotel is Deleted Successfully")

    }
    catch(err){
        next(err);
    }
}
//GET
export const getHotel= async(req,res,next)=>{
    
  
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
        console.log("Hotel is retrieved Successfully")

    }
  
    catch(err){
        next(err);
    }
}
//GET ALL
export const getHotels= async(req,res,next)=>{
    
    try{
        const hotels=await Hotel.find();
        res.status(200).json(hotels);
        console.log("Hotels are retrieved Successfully")

    }
  
    catch(err){
        next(err);
    }
}