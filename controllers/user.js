
//UPDATE
export const updateUser= async(req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser);
        console.log("User is updated Successfully")
    }
    catch(err){
        next(err);
    }
}
//DELETE
export const deleteUser= async(req,res,next)=>{
    try{
        const deletedUser=await User.findByIdAndDelete(req.params.id);
        console.log("User is Deleted Successfully")

    }
    catch(err){
        next(err);
    }
}
//GET
export const getUser= async(req,res,next)=>{
    
  
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
        console.log("User is retrieved Successfully")

    }
  
    catch(err){
        next(err);
    }
}
//GET ALL
export const getUsers= async(req,res,next)=>{
    
    try{
        const users=await User.find();
        res.status(200).json(users);
        console.log("Users are retrieved Successfully")

    }
  
    catch(err){
        next(err);
    }
}