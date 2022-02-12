import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    title: String,
    message: String,
    creator:String,
    tags: [{
        type: String,
        trim: true
    }],
    image: String,
    likeCount:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
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