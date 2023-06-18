const mongoose= require('mongoose')
const express=require('express')
const router= express.Router()
const applicantSchema=require('../model/Applicant')
router.post('/application',(req,res)=>{
    applicantSchema.create(req.body)
    .then(data =>res.json({message:'Data addedsuccessfully'}))
    .catch(err => res.status(400).json({err:'unable to add this data'}));

})
router.get('/list-applicant',(req,res) =>{
    applicantSchema.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json({nodata:'No data found'}))
})
router.get ('/update-applicant/:id',(req,res)=>{
    applicantSchema.findById(req.params.id)
    .then(data=> res.json(data))
    .catch(err=>res.status(404).json({err:'Data not found'}))
})
router.put ('/update-applicant/:id',(req,res)=>{
    applicantSchema.findByIdAndUpdate(req.params.id, req.body)
    .then(data=> res.json({message:'data updated'}))
    .catch(err=>res.status(404).json({err:'Data not found'}))
})
module.exports=router