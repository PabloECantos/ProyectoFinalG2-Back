const { Schema , model }= require('mongoose')

const userModel = new Schema({
    mail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
})

module.exports = model('Usuario',userModel)