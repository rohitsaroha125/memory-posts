import React,{useEffect} from 'react'
import { Posts } from './components/posts/Posts'
import { Form } from './components/form/Form'

import logo from './memories.png'
import './App.css'

import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions/posts'

import {Routes, Route} from 'react-router-dom'

import { Home } from './components/home/Home'
import { PostUpdate } from './components/postUpdate/PostUpdate'

export const App=() => {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    },[])

    return(
    <div className='app container'>
        <div className='navbar row'>
            <div className='col-12'>
                <h2 className='text-center'>Memories&nbsp;&nbsp;<img src={logo} style={{height:"36px"}}></img></h2>
            </div>
        </div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/update/:id" element={<PostUpdate />} />
        </Routes>
    </div>)
}