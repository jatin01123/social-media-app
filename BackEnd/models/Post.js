const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    desc:{
        type: String,
        max:150
    },
    likes:{
        type:Array,
        default:[]
    },
    img:{
        type:String
    }
    
},
{timestamps:true}
)

module.exports = mongoose.model("Post",PostSchema)