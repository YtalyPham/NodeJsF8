const express= require("express");
const path = require("path");
const app= express();
const morgan= require("morgan"); //log ra phuong thuc GET SET PUT DELETE trong terminal
const handlebars = require('express-handlebars');
const port=5000;

//HTTP logger
app.use(
    morgan('combined')
)

//Templete Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log("PATH ",path.join(__dirname,'resource/views'));


app.get("/",(req,res) =>{
    //return res.send("Hello World");
    return res.render("home");
})

app.get("/news",(req,res) =>{
    //return res.send("Hello World");
    return res.render("news");
})

app.listen(port,()=>{
    console.log(`Server starting at http://localhost:${port}`);
})