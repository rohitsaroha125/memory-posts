import axios from 'axios'

const url=`https://memories-feed-project.herokuapp.com/user`

export const signUpApi=(formData) => axios.post(`${url}/signup`,formData)
export const signInApi=(formData) => axios.post(`${url}/signin`,formData)