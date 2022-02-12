import Posts from '../models/posts.js'
import mongoose from 'mongoose'
let postControllers={}

postControllers.fetchPosts=async (req, res) => {
    try{
        const posts=await Posts.find()
        res.status(200).json(posts)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

postControllers.createPost=async (req,res) => {
    const user=req.user

    const {title, message, tags, image}=req.body

    const tagArray=tags.split(",")

    let data={title,message,creator: user.name,tags: tagArray,image,user: user._id}

    try{
        const newPost=await new Posts(data)
        const savePost=await newPost.save()
        res.status(201).json(savePost)
    }catch(error){
        res.status(409).json({ message: error.message });
    }
}

postControllers.likePost=async(req,res) => {
    const postId=req.body.postId
    const user=req.user

    try{
        const getLikeCount=await Posts.findOne({_id: postId})
        const checkLikeExists=await Posts.findOne({_id: postId, likeCount: user._id})

        if(checkLikeExists){
            const updateLike=await Posts.findOneAndUpdate({_id: postId},{$pull: {likeCount: user._id }},{new: true})
            res.json(updateLike) 
        }else{
            const updateLike=await Posts.findOneAndUpdate({_id: postId},{$push: {likeCount: user._id }},{new: true})
            res.json(updateLike)
        }
    }catch(error){
        res.json({message: error.message})
    }
}


postControllers.deletePost=async(req,res) => {
    const postId=req.params.id

    try{
        const removePost=await Posts.findOneAndRemove({_id:postId})
        res.json(removePost)
    }catch(error){
        res.json({message: error.message})
    }

}


postControllers.updatePost=async(req,res) => {
    try{

        // console.log(req.body)

        const postUpdate=await Posts.findOneAndUpdate({_id:req.body._id},req.body,{new: true})
        res.json(postUpdate)
    }catch(error){
        res.json({message: error.message})
    }

}


postControllers.fetchPostById=async(req,res) => {

    const postId=mongoose.Types.ObjectId(req.params.id)

    try{
        const getPost=await Posts.findOne({"_id":postId})
        res.json(getPost)
    }catch(error){
        res.json({message: error.message})
    }
}


export default postControllers