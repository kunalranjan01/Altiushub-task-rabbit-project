const express= require('express');
const Task=require('../models/Task');
const authMiddleware=require('../middleware/auth');
const router=express.router();

//create task
router.post('/',authMiddleware,async(req,res)=>{
    const{title,description,dueDate}=req.body;
    const task =new Task ({title,description,dueDate,userId:req.user.Id});
    await task.save();
    res.status(201).send(task);
});

//get task
router.get('/',authMiddleware,async(req,res)=>{
const tasks=await Task.find({userId:req.user.Id});
res.json(tasks);
});

//delete task
router.delete('/:id',authmiddleware,async(req,res)=>{
await Task.findByIdAndDelete(req.params.id);
res.sendstatus(204);
});
module.exports=router;