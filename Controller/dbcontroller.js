const jobs = require('../Schema/job-schema');
 
const Current_JobPostings = async(req,res)=>{
    try{
       const curr_jobs = await jobs.find({})
       if(curr_jobs?.length>0){
         res.status(200).json({
            success: true,
            message: "these are all the job posting available right now",
            data: curr_jobs
         })
       }
       else{
         res.status(404).json({
            success: false,
            message: "There are no openings as of now"
         })
       }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }
}

const SpecificJobPosting = async(req,res)=>{
    try{
      const job = await jobs.findById(req.params.id)
      if(job){
        res.status(200).json({
            success: true,
            message: "this is the job you requested for",
            data: job
         })
      }
      else{
        res.status(404).json({
           success: false,
           message: "There is no job with this id, try a different one"
        })
      }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }
}

const PostNewJob = async(req,res)=>{
    try{
       const newlyPostedJob = await jobs.create(req.body)
       if(newlyPostedJob){
            res.status(200).json({
                success: true,
                message: "Job posted",
                data: newlyPostedJob
            })
       }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }
}
const UpdateJob = async(req,res)=>{
    try{
       const updatedjob = await jobs.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
       })
       if(updatedjob){
         res.status(200).json({
            success: true,
            message: "job details updated",
            data : updatedjob
         })
       }
       else{
        res.status(404).json({
            success: false,
            message: "couldnt find any job with that id"
            
         })
       }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }
}
const deleteJob = async(req,res)=>{
    try{
       const deletedjob = await jobs.findByIdAndDelete(req.params.id)
       if(deletedjob){
        res.status(200).json({
           success: true,
           message: "This job posting has been removed",
           data : deletedjob
        })
      }
      else{
       res.status(404).json({
           success: false,
           message: "couldnt find any job with that id"
           
        })
      }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }
}



module.exports = {
    Current_JobPostings,
    SpecificJobPosting,
    PostNewJob,
    UpdateJob,
    deleteJob
}
