const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema= new Schema({
    login:String,
    password:String
});
const User=mongoose.model("user",UserSchema);

module.exports=User;