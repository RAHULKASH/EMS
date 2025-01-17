const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const OrganizersSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
});

const OrganizersModel=mongoose.model('Organizers',OrganizersSchema);
module.exports=OrganizersModel;