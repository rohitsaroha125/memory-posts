import { AUTH } from "../constants/actionTypes";
import * as api from '../api/auth'
import { authenticate } from "../auth/helpers";

export const signUpAction=(formData) => async(dispatch) =>{
    try{

        const {data}=await api.signUpApi(formData)
        authenticate(data)
        dispatch({type:'AUTH',payload: data})

    }catch(error){
        console.log(error)
    }
}


export const signInAction=(formData) => async(dispatch) => {
    try{

        const {data}=await api.signInApi(formData)
        authenticate(data)
        dispatch({type:'AUTH',payload:data})

    }catch(error){
        console.log(error)
    }
}