import axios from 'axios'

const url=`http://localhost:5000/posts`

export const fetchPosts=() => axios.get(url)
export const createPost=(post) =>axios.post(url,post) 
export const likePost=(postId) => axios.post(`${url}/like/${postId}`)
export const deletePost=(postId) => axios.delete(`${url}/delete/${postId}`)
export const updatePost=(postId) => axios.post(`${url}/update/${postId}`)
export const fetchPostById=(postId) => axios.get(`${url}/:id`)