import React,{useState,useEffect} from 'react'
import { Posts } from './components/posts/Posts'
import { Form } from './components/form/Form'
import { Auth } from './components/auth/Auth'

import logo from './memories.png'
import './App.css'

import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions/posts'

import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'

import { Home } from './components/home/Home'
import { PostUpdate } from './components/postUpdate/PostUpdate'

import { getCookie, getLocalStorage } from './auth/helpers'

export const App=() => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    const [user,setUser]=useState(getLocalStorage('user'))

    console.log(user)

    useEffect(() => {
        dispatch(fetchPosts())
    },[])

    useEffect(() => {
        setUser(getLocalStorage('user'))
    },[location])

    const logOut=async () => {
        await dispatch({type: 'LOGOUT'})
        navigate('/')
        setUser(null)
    }

    return(
    <div className='app container'>
        <div className='navbar row'>
            <div className='col-12' className={{position:"relative"}}>
                <h2 className='text-center'><Link to="/" style={{color:"unset",textDecoration:"unset"}}>Memories&nbsp;&nbsp;<img src={logo} style={{height:"36px"}}></img></Link></h2>
                {
                    user==null?(
                        <Link to="/auth"><button className='btn btn-primary' style={{position:"absolute",right:"10px",top:"10px"}}>SIGN IN</button></Link>
                    ):(
                        <p style={{position:"absolute",right:"10px",top:"10px"}}>
                        {
                            user?.result ? (
                                <span>Hi, <b>{user?.result?.givenName} {user?.result?.familyName}</b></span>
                            ):(
                                <span>Hi, <b>{user?.name}</b></span>
                            )
                        }
                        &nbsp;&nbsp;<button className='btn btn-danger' onClick={logOut}>SIGN OUT</button></p>
                    )
                }
            </div>
        </div>
        <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route exact path="/update/:id" element={<PostUpdate />} />
            <Route exact path="/auth" element={<Auth />} />
        </Routes>
    </div>)
}