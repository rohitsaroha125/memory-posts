import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'

import * as api from '../../api/posts'

export const PostUpdate=() => {

    const postId=useParams().id

    useEffect(() => {
        api.fetchPostById(postId)
            .then((res) => {
                console.log("post data is",res)
            })
    },[])

    return(
    <div>

    </div>)
}