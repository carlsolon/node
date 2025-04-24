const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb://localhost:27017/Login-tut');

// check database connected or not
connect.then(()=>{
    console.log("Database connected Succesfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});

const LoginSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;