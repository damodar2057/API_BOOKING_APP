import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();
// import { createError } from "../utils/error.js";
// import bcrypt from "bcryptjs"

//CREATE HOTEL
router.post("/", createHotel)
  

//UPDATE HOTEL
router.put("/:id",updateHotel);
//DELETE HOTEL
router.delete("/:id",deleteHotel)

//GET ALL HOTELS
router.get("/",getHotels);

//GET ONE HOTEL
router.get("/:id",getHotel);

export default router;