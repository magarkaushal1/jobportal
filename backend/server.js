const express = require('express')
const auth_route = require("./route/auth")
const jobs_route = require("./route/jobs")
require("./config/db_connection")
const app = express();

app.use(express.static('public'))
app.use(express.json())
require('dotenv').config()


app.use("/api", auth_route)
app.use("/api/jobs", jobs_route)

app.use("",(req,res,next)=>{
    res.status(404).send({"data":"page not found"})
})

app.use((err,req,res,next) =>{
    console.log("error")
    console.log(err.name)
    let status = 500;
    if(err.name === "ValidationError"){
        status = 400
    }
    res.status(status).send({
        data:"server error",
        msg: err.message
    })
})


app.listen(8000,(err,data)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("listening...");
    }
})