import React,{useState} from 'react'
import FileBase64 from 'react-file-base64'

import { useDispatch } from 'react-redux'

import { createPost } from '../../actions/posts'

import './Form.css'

export const Form=({user}) => {

    const [formData,setFormData]=useState({creator:'',title:'',message:'',tags:'',image:''})
    const dispatch=useDispatch()

    const handleSubmit=(e) => {
        e.preventDefault()
        dispatch(createPost(formData))
        console.log(formData)
    }

    return(
        <div>
            {
                user?(
                    <form className='post-form' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='text-center'>Creating a memory</h2>
        <div className='form-gorup mb-3'>
            <input type="text" className='form-control' placeholder='Creator' onChange={(e) => setFormData({...formData, creator: e.target.value})}>
            </input>
        </div>
        <div className='form-gorup mb-3'>
            <input type="text" className='form-control' placeholder='Title' onChange={(e) => setFormData({...formData,title: e.target.value})}>
            </input>
        </div>
        <div className='form-gorup mb-3'>
            <textarea className='form-control' placeholder='Message' onChange={(e) => setFormData({...formData, message: e.target.value})}>
            </textarea>
        </div>
        <div className='form-gorup mb-3'>
            <input type="text" className='form-control' placeholder='Tags(comma separated)' onChange={(e) => setFormData({...formData,tags:e.target.value})}>
            </input>
        </div>
        <div className='form-group mb-3'>
            <FileBase64
            type="file"
            multiple={false}
            onDone={({base64}) => setFormData({...formData,image:base64})}
            />
        </div>
        <div className='form-group'>
            <button className='btn btn-primary' type="submit">Submit</button>
        </div>
    </form>
                ):(
                    <div className='post-form text-center'>
                        <b>Please Sign in or create account to start posting your memories here.</b>
                    </div>
                )
            }
        </div>
    )
}