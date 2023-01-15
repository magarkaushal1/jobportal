const Jobs = require("../model/Jobs")

const index = async (req,res,next) => {
    
    let jobs = await Jobs.find({})
    res.send(jobs)

    // Jobs.find({},(err,data)=>{
    //     res.send(data)
    // })
}

const insert = async (req,res,next) => {
    try{
        let jobs = await Jobs.create({

        })
    
        res.send(jobs)
    }catch(err){
          next(err)
    }
    
}

module.exports ={
    index,
    insert,

}