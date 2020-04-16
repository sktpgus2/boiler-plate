const mongose = require('mongoose');

const userSchema = mongose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0 
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongose.model('User',userSchema)
module.exports = { User }