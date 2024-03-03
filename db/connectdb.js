const mongoose = require('mongoose');

const connectDb= ()=> {
    return mongoose.connect(process.env.LIVE_URL)
    .then(
        ()=>{
            console.log("connect successfully")
        }
    ).catch((err)=>{
        console.log(err);
    })
}
module.exports=connectDb