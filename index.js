const express = require("express");
const mongoose = require('mongoose');
const course = require('./models/course.model.js');
const coureRoute = require('./routes/course.route.js');
const app = express();

//Midel wares
app.use(express.json());
app.use(express.urlencoded({extended:false})) // to read form encode data
app.listen(3000, () => {
  console.log("listennnnnn");
});

//Routes
app.use("/api/products",coureRoute)

app.get("/", (req, res) => {
  res.send(" iam good bendi");
});

// app.post("/api/products", async (req,res)=>{
//  try {
//    const courseRef= await course.create(req.body);
//    res.status(200).json(courseRef)
//  } catch (error) {
//     res.status(500).json({error:error.message})
//  }
// });
// app.get("/api/products", async (req,res)=>{
//     try{
//         const coureRef = await course.find({})
//         res.status(200).json(coureRef)
//     }catch(error){
//         res.status(500).json({error:error})
//     }
// })
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const courseRef = await course.findById(id);
//     res.status(200).json(courseRef);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// app.put('/api/products/:id', async(req,res)=>{
// try{
//     const { id } = req.params;
//     const courseUpdateRef = await course.findByIdAndUpdate(id, req.body)
//     if(!courseUpdateRef){
//         return res.status(404).json({message:'not found data'})
//     }
//     const upadteCoures = await course.findById(id)
//     res.status(200).json({upadteCoures})

// }catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// })
// app.delete('/api/products/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const cours = await course.findByIdAndDelete(id);
//         if(!cours){
//             res.status(404).json({message:'not Couyrse found'})
//         }
//         res.status(200).json({message:'deeleted successfully'})
//     }catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// })
mongoose.connect('mongodb+srv://venki:V5cMNV2RIwWhPBX5@cluster0.ve2lx.mongodb.net/Test-venki?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!')).catch((error)=>{
    console.log('conection failed')
    console.log(error)
  })