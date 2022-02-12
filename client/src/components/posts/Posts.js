import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Post } from './Post/Post'
import { fetchPosts } from '../../api/posts'
import './Posts.css'

export const Posts=({user}) => {

    const posts=useSelector((state) => state.posts)

    useEffect(() => {
        console.log(posts)
    })

    if(!posts.length) return 'Loading...'
    else{
        return(<div className='row posts'>
        {
            posts.map((post,i) => {
                return(
                    <div className='col-sm-6'>
                        <Post user={user} key={i} post={post} />
                    </div>
                )
            })
        }
    </div>)
    }
}