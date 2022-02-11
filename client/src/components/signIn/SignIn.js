import React,{useState} from 'react'

import {BsLockFill} from 'react-icons/bs'
import {GoogleLogin} from 'react-google-login'
import {BsGoogle} from 'react-icons/bs'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signInAction } from '../../actions/auth'

export const SignIn=({signUp, setSignUp}) => {

    const [formData,setFormData]=useState({email:'',password:''})

    const navigate=useNavigate()
    const dispatch=useDispatch()


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

      const handleChange=(e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
      }


      const handleSubmit=async (e) => {
          e.preventDefault()
          await dispatch(signInAction(formData))
          navigate('/')
      }


    return(
        <div className='row'>
                <div className='col-sm-4 offset-sm-4 auth-card text-center'>
                    <div className='lock-img'>
                        <BsLockFill className='lock' />
                    </div>
                    <h4>Sign In</h4>
                    <div className='form'>
                    <form>
                        <div className='form-group'>
                            <input type="email" className='form-control' placeholder='Email Address*' name="email" id="email" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Password*' name="password" id="password" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                        </div>
                    </form>
                    <p style={{marginBottom:"0px",marginTop:"10px",color:"#9a9a9a"}}>or</p>
                    <GoogleLogin
    clientId="962615186085-8td2lbpbkipl55r61l8ir0ii4rt7837l.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} className="btn" disabled={renderProps.disabled} style={{background:"#dc4a38",color:"#fff",marginTop:"10px"}}><BsGoogle />&nbsp;&nbsp;Sign in with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                    <p className='auth-tag' onClick={() => setSignUp(true)}>Don't have an account? <span><b>Create Account</b></span></p>
                    </div>
                </div>
            </div>
    )
}