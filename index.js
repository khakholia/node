const express = require("express");
var cors = require("cors");
const fs = require("fs");

// Initializing Exprress Server
const app = express();
app.use(cors());

//Routes/Apis
app.use("/readFile", async (req,res)=>{
    res.end(await fs.readFileSync("./data.json"))
});
app.use("/writeFile", async (req,res)=>{
  var id = req.query.id
  var name = req.query.name
  if(id && name){
    var data = JSON.parse(await fs.readFileSync("./data.json"))
    data.data.push({id:id,name: name})
    await fs.writeFileSync("./data.json",JSON.stringify(data))
    res.json({status: "File Updated."})
  }else{
    res.end("Error Occured")
  }
});

//Port
const port = 8000;

//Starting a server
app.listen(port, () => {
  console.log(`*** SERVER STARTED AT PORT ${port} ***`);
});
