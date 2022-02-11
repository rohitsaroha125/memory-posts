import mongoose from 'mongoose'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'
let userControllers={}

userControllers.signUp=async(req,res) => {
    try{

        const {name, email, password}=req.body

        let data={
            name,
            email,
            password
        }

        const findUser=await User.findOne({email})

        if(findUser){
            res.json({
                ok:false,
                message:'Email already exists'
            })
        }else{
            const createUser=await new User(data)
            const saveUser=await createUser.save()
            const token=jwt.sign({email,  id: saveUser._id,}, 'setUser', {expiresIn:'1d'})

            res.json({
                ok: true,
                userDetails: saveUser,
                token
            })
        }
    }catch(error){
        res.json({message: error})
    }
}


userControllers.signIn=async(req,res) => {
    try{
        const {email, password}=req.body
        const findUser=await User.findOne({email, password})

        if(findUser){
            let token=jwt.sign({email, id:findUser._id},'setUser',{expiresIn:'1d'})

            res.json({
                ok:true,
                userDetails: findUser,
                token
            })
        }else{
            res.json({
                ok:false,
                message: 'Email or Password does not match'
            })
        }

    }catch(error){
        console.log(error)
    }
}


export default userControllers