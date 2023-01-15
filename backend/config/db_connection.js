const mongoose = require("mongoose")

mongoose.set('strictQuery',false)
mongoose.connect(
    "mongodb://0.0.0.0:27017/Jobportal",
    // { useNewUrlParser: true, useUnifiedTopology:true},
    // () => {
    //     console.log("Connected to MongoDB");
    // }
)
.then(res => {
    console.log("Connected to MongoDB")
})
.catch(err =>{
    console.log(err)
});