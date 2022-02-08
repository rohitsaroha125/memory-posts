import axios from 'axios'

const url=`http://localhost:5000/posts`

export const fetchPosts=() => axios.get(url)
export const createPost=(post) =>axios.post(url,post) 
export const likePost=(postId) => axios.post(`${url}/like/${postId}`)
export const deletePost=(postId) => axios.delete(`${url}/delete/${postId}`)
export const updatePost=(postUpdate) => axios.post(`${url}/update`,postUpdate)
export const fetchPostById=(postId) => axios.get(`${url}/${postId}`)