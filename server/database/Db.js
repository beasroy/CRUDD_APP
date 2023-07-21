import mongoose from "mongoose";


const connection = async () =>{
    const URL =`mongodb+srv://bipasha1413:CrudApp@CRUD_APPLICATION.pexylaq.mongodb.net/CRUD_APPLICATION`;
    try {
        mongoose.connect(URL,{ useunifiedTopology:true, useNewUrlParser:true });
       console.log('Database connected succesfully');
       
    } catch (error) {
        console.log("error while connecting with database",error);
    }
}

export default connection;