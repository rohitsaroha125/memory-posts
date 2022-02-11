import React,{useState} from 'react'
import {BsLockFill} from 'react-icons/bs'

import {useDispatch} from 'react-redux'

import { signUpAction } from '../../actions/auth'

import { useNavigate } from 'react-router-dom'

export const SignUp=({signUp,setSignUp}) => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [formData,setFormData]=useState({name:'',email:'',password:'',repeatPassword:''})

    const handleChange=(e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit=async (e) => {
        e.preventDefault()
        await dispatch(signUpAction(formData))
        navigate('/')
    }

    return(
        <div className='row'>
                <div className='col-sm-4 offset-sm-4 auth-card text-center'>
                    <div className='lock-img'>
                        <BsLockFill className='lock' />
                    </div>
                    <h4>Sign Up</h4>
                    <div className='form'>
                    <form>
                    <div className='form-group'>
                            <input type="text" className='form-control' placeholder='Your Name*' name="name" id="name" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='form-group'>
                            <input type="email" className='form-control' placeholder='Email Address*' name="email" id="email" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Password*' name="password" id="password"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Repeat Password*' name="repeatPassword" id="repeatPassword" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                        </div>
                    </form>
                    <p className='auth-tag' onClick={() => setSignUp(false)}>Already have an account? <span><b>Sign In</b></span></p>
                    </div>
                </div>
            </div>
    )
}