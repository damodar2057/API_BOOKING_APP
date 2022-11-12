import express from "express";
import { register,login } from "../controllers/auth.js";
const router = express.Router();


//Register
router.post("/register",register);
export default  router;


//LOGIN
router.post("/login",login);