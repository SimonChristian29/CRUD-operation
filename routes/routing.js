const express=require('express');

const Model=require('../model/empschema');
const router=express.Router();

router.post('/empdata', async (req, res) => {
     
     const emp = new Model({
          empid: req.body.empid,
          name: req.body.name,
          position: req.body.position,
          department: req.body.department,
          salary: req.body.salary,
          email: req.body.email,
          phoneNo: req.body.phoneNo, 
     });

     try {
          const dataToSave = await emp.save();
          res.status(201).json(dataToSave);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
});
router.get('/empdatas',async (req,res)=>{
 try{
     const data=await Model.find();
     res.json(data);
 }
 catch(error)
 {
     res.status(500).json({ message: error.message });
 }
})
router.put('/empdata/:id',async (req,res)=>{
     try{
         const result=await Model.findByIdAndUpdate(req.params.id,req.body,{
               new:true
              });
         res.json(result);
     }
     catch(error)
     {
         res.status(300).json({ message: error.message });
     }
    })
    router.delete('/empdata/:id',async (req,res)=>{
     try{
         const result=await Model.findByIdAndDelete(req.params.id);
         res.json(result);
     }
     catch(error)
     {
         res.status(500).json({ message: error.message });
     } 
    })

module.exports = router; 
 