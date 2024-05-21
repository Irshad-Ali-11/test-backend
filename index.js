const Express = require("express");
require("dotenv").config();
const app = Express();

const PORT = 3000;

app.get("/",(req,resp)=>
{
         resp.send("this is home route")
});
app.get("/whatapp",(req,resp)=>
{
        resp.send("this is whatapp route")
});
app.get("/youtube",(req,resp)=>
{
        resp.send("this is youtube route")
});
app.get("/about",(req,resp)=>
{
        resp.send("<h1>this is about ruote</h1>")
})
app.listen(process.env.PORT,()=>
{
        console.log("Started Server... ",process.env.PORT)
})