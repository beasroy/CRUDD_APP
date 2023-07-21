
import PostUser from "../model/userSchema.js";


export const addUser = async (req,res)=>{
    const user = req.body;
    console.log(user);
    
    const newUser = new PostUser(user);

    try{
        await newUser.save(user);
        res.status(201).json(newUser);
    } catch (error){
        console.log('Error while saving user:', error); // Add this line to log the error message
        res.status(409).json({ message: error.message});     
    }
    
}

export const getUsers = async (req,res)=>{
    try {
        const users= await PostUser.find({}) ;
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getUser = async (req,res)=>{
    
    try {
        const user= await PostUser.find({userId:req.params.id}) ;
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const editUser = async (req,res)=>{
    let user = req.body;
     const editUser = new PostUser(user);
    try {
        await PostUser.updateOne({userId:req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const deleteUser = async (req,res)=>{
   
    try {
        await PostUser.deleteOne({userId:req.params.id});
        res.status(201).json("User deleted Successfully");
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}
