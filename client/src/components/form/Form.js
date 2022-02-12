import React,{useState} from 'react'
import FileBase64 from 'react-file-base64'

import { useDispatch } from 'react-redux'

import { createPost } from '../../actions/posts'

import './Form.css'

export const Form=({user}) => {

    const [formData,setFormData]=useState({title:'',message:'',tags:'',image:'',btnDisable:false})
    const dispatch=useDispatch()

    const clear=() => {
        setFormData({title:'',message:'',tags:'',image:'',btnDisable:false})
    }

    const handleSubmit=async (e) => {
        //prevent default event and disable button till dispatch is completed
        e.preventDefault()
        setFormData({...formData,btnDisable: true})

        await dispatch(createPost(formData))
        clear()
    }

    return(
        <div>
            {
                user?(
                    <form className='post-form' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='text-center'>Creating a memory</h2>
        <div className='form-gorup mb-3'>
            <input type="text" className='form-control' placeholder='Title' value={formData?.title} onChange={(e) => setFormData({...formData,title: e.target.value})}>
            </input>
        </div>
        <div className='form-gorup mb-3'>
            <textarea className='form-control' placeholder='Message' value={formData?.message} onChange={(e) => setFormData({...formData, message: e.target.value})}>
            </textarea>
        </div>
        <div className='form-gorup mb-3'>
            <input type="text" className='form-control' value={formData?.tags} placeholder='Tags(comma separated)' onChange={(e) => setFormData({...formData,tags:e.target.value})}>
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
            <button disabled={formData?.btnDisable} className='btn btn-primary' type="submit">Submit</button>
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