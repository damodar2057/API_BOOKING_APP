import express from "express";
const router = express.Router();
import {updateUser,deleteUser,getUsers,getUser} from "../controllers/user.js";
import {verifyUser,verifyAdmin,verifyToken} from "../utils/verifyToken.js"

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello admin,you are logged in and you can delete all account!!") 
    next();
})

//UPDATE User
router.put("/:id",updateUser); 
//DELETE User
router.delete("/:id",deleteUser)

// //GET ALL UserS
// router.get("/",getUsers);

// //GET ONE User
// router.get("/:id",getUser)

export default router;