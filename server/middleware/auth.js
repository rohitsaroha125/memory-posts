import jwt from 'jsonwebtoken'
import User from '../models/users.js'

export const auth=async(req,res,next) => {
    if(req.header('x-auth')){
        const token=req.header('x-auth')
        let tokenData
        try{
            tokenData=jwt.verify(token,'setUser')

            let findUser=await User.findOne({_id: tokenData.id})
            if(findUser){
                req.user = findUser
                next()
            }else{
                res.status(400).json({
                    ok: false,
                    auth:false,
                    errors: err.message 
                })
            }
        }catch(error){
            console.log(error);
        }
    }else{
        res.status(400).json({ 
            ok: false,
            auth:false,
            errors: 'token must be provided'
        })
    }
}