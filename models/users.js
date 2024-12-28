const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        minLength:3,
        maxLength:80
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    },
    role:{
        type:String,
        default:'student',
        enum:['student','company']
    }
},{timestamps:true});

userSchema.add({
    bio:{
        type:String,
    },
    profession:{
        type:String
    },
    resetPasswordToken:{
        type:String
    }
})
//mongoose pre and post method


module.exports = mongoose.model('users',userSchema)