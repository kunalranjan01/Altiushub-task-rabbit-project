const mongoose=require('mongoose');
const taskScheme= new mongoose.Scheme(
    {
        title:{type:String,required:true},
        description: String,
        dueDate:Date,
        userId:{type:mongoose.Scheme.Types.ObjectId,ref:'user'},
    });
    module.exports=mongoose.model('Task',taskScheme);
