import express from 'express'
import postControllers from '../controllers/posts.js'
import { auth } from '../middleware/auth.js'

const router=express.Router()

router.get('/',postControllers.fetchPosts)
router.get('/:id',auth,postControllers.fetchPostById)
router.post('/',auth,postControllers.createPost)
router.post('/like/:id',auth,postControllers.likePost)
router.delete('/delete/:id',auth,postControllers.deletePost)
router.post('/update',auth,postControllers.updatePost)

export default router