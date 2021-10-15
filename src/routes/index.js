const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // app.get("/",(req,res) =>{
    //     //return res.send("Hello World");
    //     return res.render("home");
    // })

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    // app.get("/news",(req,res) =>{
    //     //return res.send("Hello World");
    //     return res.render("news");
    // })

    //http://localhost:5000/search?q=learn%20f8&rel=mycv&author=y
    // ? là bắt đầu key=value cách nhau & rồi key=value khác nên dùng chỉ cho phương thức get
    // app.get("/search",(req,res) =>{
    //    console.log(req.query);
    //     return res.render("search");
    // })

    // app.post("/search",(req,res)=>{
    //     console.log(req.body);
    //     return res.send("")
    // })
}
module.exports = route;
