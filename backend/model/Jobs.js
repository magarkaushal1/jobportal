const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JobSchema = new mongoose.Schema({
         name :{
            type: String,
            required:true, 
     },
     salary:{
        type:Number,
        required:true,
     },
        address:{
        street:{
            type:String,
        }
     },
     
})


module.exports = mongoose.model('Jobs',JobSchema);
