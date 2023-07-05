import PostUser from "../model/user_schema.js";


export const addUser = async (req,res)=>{
    const data = req.body;
    console.log(data);
    
    const newUser = new PostUser(data);

    try{
        await newUser.save(data);
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
    
}