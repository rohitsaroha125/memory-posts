import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'

const app=express()

const PORT=process.env.PORT || 5000

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

//endpoints for app
app.use('/posts',postRouter)
app.use('/user',userRouter)

const mongo_url=`mongodb+srv://rohit125:rohit999@practice.xydsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(mongo_url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at ${PORT}`)))
    .catch((error) => console.log(error))