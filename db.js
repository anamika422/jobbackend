const mongoose = require('mongoose');

require('dotenv').config()


const connectToDB = ()=>{
    mongoose.connect(`mongodb+srv://agarwalanamika422:${process.env.Mongo_Password}@jobportal.0o7gc.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`)
      .then(() => console.log('Connected to mongodb successfully'))
      .catch(() =>console.log('error in connecting mongodb'))
}

module.exports = connectToDB