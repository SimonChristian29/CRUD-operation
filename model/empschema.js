const mongoose= require('mongoose');

const dataSchema= new mongoose.Schema({
    
    empid:{
        type:Number,
        required:true,
        
    },
    name:{
        required:true,
        type:String,
    }, 
    position:{
        required:true,
        type:String,
    },
    department:{
        required:true, 
        type:String,
    },
    salary:{
        required:true,
        type:Number,
    },
    email:{
        required:true,
        type:String,
    },
    phoneNo:{ 
        required:true,
        type:String,
    }

})
module.exports=mongoose.model('emp',dataSchema);