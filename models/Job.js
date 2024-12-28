const { application } = require('express');
const mongoose= require('mongoose');
const jobSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true

    },
    description:{
        type:String
    },
    company:{
        type:String
    },
    salary:{
        type:String
    },
    image:{
        type:String
    },
    jobRole:{
        type:String
    },
    requirement:{
        type:Array
    },
    skills:{
        type:Array
    },
    application:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'users'
            },
        }
    ],
    lastDate:{
        type:String
    },
    

    
},{timestamps:true})
jobSchema.add({
location:{
    type:String,
    required:true
},
shiftAndschedule:{
    type:String,
    required:true
},
DateofApply:{
    type:String
},
jobType:{
    type:String,
    required:true
}
})


module.exports= mongoose.model('job',jobSchema)