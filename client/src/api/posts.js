import axios from 'axios'
import { getCookie } from '../auth/helpers'

const url=`http://localhost:5000/posts`

export const fetchPosts=() => axios.get(url,{
    headers:{
        'x-auth': getCookie('setUser')
    }
})
export const createPost=(post) =>axios.post(url,post,{
    headers:{
        'x-auth':getCookie('setUser')
    }
}) 
export const likePost=(postId) => axios.post(`${url}/like/${postId}`,{
    headers:{
        'x-auth':getCookie('setUser')
    }
})
export const deletePost=(postId) => axios.delete(`${url}/delete/${postId}`,{
    headers:{
        'x-auth':getCookie('setUser')
    }
})
export const updatePost=(postUpdate) => axios.post(`${url}/update`,postUpdate,{
    headers:{
        'x-auth':getCookie('setUser')
    }
})
export const fetchPostById=(postId) => axios.get(`${url}/${postId}`,{
    headers:{
        'x-auth':getCookie('setUser')
    }
})