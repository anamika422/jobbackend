const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors')



const connection = require('./db') //
connection();
const userRouter = require('./Routes/user')
const jobRouter = require('./Routes/job')
const applicantRouter= require('./Routes/applicant')

app.use(cors())
app.use(express.json({limit:"50mb"}))
// middleware are function that can have the access of requesting to an object and responding to an object. They can modify the request and response and can also be use between the routes.

app.get('/',(req,res)=>{
    res.send('welcome home')
})

app.set('view engine','ejs')

 app.use('/users',userRouter)
 app.use('/job',jobRouter)
 app.use('/applicant',applicantRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})