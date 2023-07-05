import mongoose from "mongoose";


const URL =`mongodb+srv://bipasha1413:CrudApp@CRUD_APPLICATION.pexylaq.mongodb.net/`;

mongoose.connect(URL,{ useunifiedTopology:true, useNewUrlParser:true });

const userSchema = mongoose.Schema({
  userId: { type: Number, default :0,unique: true },
  name: String,
  username: String,
  email: String,
  phoneno: String
});




export default mongoose.model('user', userSchema);
