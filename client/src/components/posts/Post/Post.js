import React,{useState} from 'react'
import './Post.css'
import moment from 'moment'

import {AiFillLike} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

import { likePost } from '../../../actions/posts'
import { deletePost } from '../../../actions/posts'
import { useDispatch } from 'react-redux'
import {BsThreeDotsVertical, BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Post=({post}) => {

    const [toggleMenu,setToggleMenu]=useState(false)
    const dispatch=useDispatch()

    return(
    <div className='post'>
        <div className='post-topbar'>
        <div className='creator'>
            <h4>{post.creator}</h4>
            <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className='menu'>
            <BsThreeDotsVertical className='icon' onClick={() => setToggleMenu(!toggleMenu)} />
            {
                toggleMenu && (
                    <div className='menu-list'>
                        <ul>
                            <li><Link to={`/update/${post._id}`} style={{color:"unset",textDecoration:"unset"}}><BsFillPencilFill />&nbsp;&nbsp;Update</Link></li>
                        </ul>
                    </div>
                )
            }
        </div>
        </div>
        <img src={post.image}></img>
        <div className='post-content'>
            <div className='tags'>
            {
                post.tags.map((tag,i) => {
                    return (<span className='tag' key={i}>#{tag}</span>)
                })
            }
            </div>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
            <div className='post-actions'>
                <button className='btn like-btn' onClick={() => dispatch(likePost(post._id))}><AiFillLike />&nbsp; Like &nbsp;{post.likeCount}</button>
                <button className='btn delete-btn' onClick={() => dispatch(deletePost(post._id))}><BsFillTrashFill />&nbsp; Delete</button>
            </div>
        </div>
    </div>)
}