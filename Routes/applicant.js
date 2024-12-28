const express= require ('express');
const { applyJob, getSingleJob, getAllappliedJobs } = require('../controllers/applicant');
const router= express.Router();

router.post('/create',applyJob);
router.get('/getAllappliedJob',getAllappliedJobs);
router.get('/getsinglejob/:_id',getSingleJob)













module.exports= router