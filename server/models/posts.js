import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    title: String,
    message: String,
    creator:String,
    tags: [String],
    image: String,
    likeCount:{
        type:Number,
        default:0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Date,
        default: new Date
    }
})

var Posts=mongoose.model('Post',postSchema)

export default Posts