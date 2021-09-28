const express= require("express");
const app= express();
const port=5000;
app.get("/",(req,res) =>{
    var a=1;
    var b=2;
    var c=a+b;
    return res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server starting at http://localhost:${port}`);
})