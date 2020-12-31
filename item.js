const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
        desc:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        },

    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    path:{
        type:String
    }
})
module.exports=mongoose.model('shop',schema);
