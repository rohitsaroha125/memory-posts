import React,{useState} from 'react'
import './Auth.css'

import {BsLockFill} from 'react-icons/bs'
import {GoogleLogin} from 'react-google-login'
import {BsGoogle} from 'react-icons/bs'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SignIn } from '../signIn/SignIn'
import { SignUp } from '../signUp/SignUp'

export const Auth=() => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [signUp,setSignUp]=useState(false)

    const responseGoogle = async (response) => {
        
        const result=response?.profileObj
        const token=response?.tokenId

        try{
            await dispatch({type:'AUTH',payload: {result, token}})
            navigate('/')
        }catch(error){
            console.log(error)
        }

      }

    if(signUp){
        return(
            <SignUp signUp={signUp} setSignUp={setSignUp} />
            )
    }else{
        return(<SignIn signUp={signUp} setSignUp={setSignUp} />)
    }
}