import axios from 'axios'

const url=`http://localhost:5000/user`

export const signUpApi=(formData) => axios.post(`${url}/signup`,formData)
export const signInApi=(formData) => axios.post(`${url}/signin`,formData)