import React,{useState} from 'react'
import './Post.css'
import moment from 'moment'

import {AiFillLike} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

import { likePost } from '../../../actions/posts'
import { deletePost } from '../../../actions/posts'
import { useDispatch } from 'react-redux'
import {BsThreeDotsVertical, BsFillPencilFill, BsHandThumbsUp, BsHandThumbsUpFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Post=({post,user}) => {

    const [toggleMenu,setToggleMenu]=useState(false)
    const dispatch=useDispatch()

    return(
    <div className='post'>
        <div className='post-topbar'>
        <div className='creator'>
            <h4>{post.creator}</h4>
            <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        {
            user?._id===post?.user ?(
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
            ):(
                null
            )
        }
        </div>
        <img className='post-image' src={post.image}></img>
        <div className='post-content'>
            <div className='tags'>
            {
                post.tags.map((tag,i) => {
                    return (<span className='tag' key={i}>#{tag}&nbsp;</span>)
                })
            }
            </div>
            <h1>{post.title}</h1>
            <p>{post.message.length>50 ? `${post?.message.substring(0,50)}...`:post.message }</p>
            <div className='post-actions'>
                {
                    user?(
                        <button className='btn like-btn' onClick={() => dispatch(likePost(post._id))}>
                            {
                                post?.likeCount.includes(user._id)?(
                                    <BsHandThumbsUpFill />
                                ):(
                                    <BsHandThumbsUp />
                                )
                            }
                        &nbsp; Like &nbsp;{post?.likeCount.length}</button>
                    ):(
                        <button className='btn like-btn-disable'><BsHandThumbsUpFill />&nbsp; Like &nbsp;{post?.likeCount.length}</button>
                    )
                }
                {
                    user?._id===post?.user ? (
                        <button className='btn delete-btn' onClick={() => dispatch(deletePost(post._id))}><BsFillTrashFill />&nbsp; Delete</button>
                    ):(
                        null
                    )
                }
            </div>
        </div>
    </div>)
}