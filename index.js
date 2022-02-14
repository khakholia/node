const express = require("express");
var cors = require("cors");
const fs = require("fs");

// Initializing Exprress Server
const app = express();
app.use(cors());

//Routes/Apis
app.use("/readFile", async (req,res)=>{
    res.end(JSON.parse(await fs.readFileSync("./data.json")))
});

//Port
const port = 8000;

//Starting a server
app.listen(port, () => {
  console.log(`*** SERVER STARTED AT PORT ${port} ***`);
});
