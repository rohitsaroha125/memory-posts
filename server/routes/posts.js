import express from 'express'
import postControllers from '../controllers/posts.js'

const router=express.Router()

router.get('/',postControllers.fetchPosts)
router.get('/:id',postControllers.fetchPostById)
router.post('/',postControllers.createPost)
router.post('/like/:id',postControllers.likePost)
router.delete('/delete/:id',postControllers.deletePost)
router.post('/update',postControllers.updatePost)

export default router