const express = require('express')
const jobRouter = express.Router()

jobRouter.get('/get',Current_JobPostings)
jobRouter.get('/get/:id',SpecificJobPosting)
jobRouter.post('/add',PostNewJob)
jobRouter.put('/update/:id',UpdateJob)
jobRouter.delete('/delete/:id',deleteJob)

module.exports = jobRouter;