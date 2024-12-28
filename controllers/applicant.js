let ApplicantCollection= require('../models/Applicants')
let JOB = require('../models/Applicants')

const applyJob= async(req,res)=>{
  console.log(req.body)
    let{ _id }= req.user
    try {
      let job = await JOB.findById(req.body.job)

      if(!job.applicants.includes(req.user)){
        job.applicants.push(req.user)
        await job.save()
      }
      else{
      return res.json({msg:"already applied to this job", success:true})
      }
      let data = await ApplicantCollection.create({ ...req.body, user: _id });
    res.json({msg:"job applied successfully", success:true})
    } catch (error) {
      console.log(error.message)
      res.send({msg:"error in apply job", success:false, error:error.message})
      
    }
}

const getAllappliedJobs= async(req,res)=>{
  let{_id}= req.user
  try {
    let data= await ApplicantCollection.find({user:_id})
    res.json({msg:"fetch all jobs successfully", success:true, data})
  } catch (error) {
    res.send({msg:"error in getting applied jobs", success:false, error:error.message})
  }
}

const getSingleJob= async(req,res)=>{
  res.send('get single job running');
}

const getApplicants = async(req,res)=>{
    let userId = req.user._id;

    try {
        let job = await ApplicantCollection.find({companyId:userId}).populate('job');
    res.json({msg:"get successfully",success:true,job})
    } catch (error) {
        res.json({msg:"error in getting applicants",success:false,error:error.message})
    }

}



module.exports={
    applyJob,
    getAllappliedJobs,
    getSingleJob
}