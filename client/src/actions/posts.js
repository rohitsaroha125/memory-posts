import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes"
import * as api from '../api/posts'

export const fetchPosts=() => async (dispatch) => {
    try{
        const {data}=await api.fetchPosts()
        dispatch({type: FETCH_ALL,payload:data})
    }catch(error){
        console.log(error.message)
    }
}

export const createPost=(post) => async(dispatch) => {
    try{
        const {data}=await api.createPost(post)
        dispatch({type:CREATE,payload:data})
    }catch(error){
        console.log(error.message)
    }
}

export const likePost=(postId) => async(dispatch) => {
    try{

        // console.log("Inside likepost action")

        const {data}=await api.likePost(postId)
        dispatch({type:LIKE,payload: data})
    }catch(error){
        console.log(error.message)
    }
}

export const deletePost=(postId) => async(dispatch) => {
    try{
        const {data}=await api.deletePost(postId)
        dispatch({type:DELETE, payload: data})
    }catch(error){
        console.log(error.message)
    }
}

export const updatePost=(postUpdate) => async(dispatch) => {
    try{
        const {data}=await api.updatePost(postUpdate)
        dispatch({type: UPDATE, payload: data})
    }catch(error){
        console.log(error.message)
    }
}