const express=require("express");
const cors=require("cors");
const User=require("./config");
const app=express();
app.use(express.json());
app.use(cors());
app.post('/create',async(req,res)=>
{
 const data=req.body;
//  console.log("User added: ",data); 
//   res.send({ msg: "User added", data });
 await User.add(data);
 res.send({msg:"user added successfully"});
})
app.get("/", async (req, res) => {
    try {
      const getValue = await User.get();
      
      // Check if documents exist
      if (!getValue.empty) {
        // Mapping over docs to get id and data
        const list = getValue.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.send(list);
      } else {
        res.send({ msg: "No users found" });
      }
  
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send({ error: "An error occurred while fetching data" });
    }
  });
// app.post("/update",async(req,res)=>{
//     const id=req.body.id;
//     delete req.body.id;
//     const list=req.body;
//     await User.docs(id).update(list);   
// })
app.post("/update", async (req, res) => {
    try {
        const { id, ...list } = req.body; // Destructure id and the rest of the data
        
        if (!id) {
            return res.status(400).json({ error: "ID is required" }); // Validate if ID exists
        }

        await User.doc(id).update(list);  // Use `doc` instead of `docs` for single document reference
        
        return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update user", details: error.message });
    }
});

app.listen(4000,()=>{
    console.log("running on 4000");
})