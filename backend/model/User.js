const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        unique:true,
        required:true,
        //validate:{
         // validator: async (email) => {
         //  const count =  mongoose.model.User.countDocuments({email})
         //     if(count > 0){
         //       return false
         //     }
         // },
         //message:"email already in used."
        //}
     },
     password:{
        type:String,
        required:[true, 'Why no password?'],
        select:false,
     },
   //   phone:{
   //      type:String,
   //      validate:{
   //          validator:function(v){
   //              return /\d{3}-\d{3}-\d{4}/.test(v);
   //          },
   //          message:props => '${props.value} is not a valid phone number!'
   //      },
   //   },
     address:{
        street:{
            type:String,
        }
     },
     role:{
        type:String,
        enum:["Super-Admin","Job-Seeker","Company"]
     },
})


module.exports = mongoose.model('User',UserSchema);
