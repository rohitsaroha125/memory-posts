import React,{useState,useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import * as api from '../../api/posts'
import moment  from 'moment'
import FileBase64 from 'react-file-base64'

import { useDispatch } from 'react-redux'
import { updatePost } from '../../actions/posts'

export const PostUpdate=() => {

    const postId=useParams().id
    const dispatch=useDispatch()
    const navigate = useNavigate();

    const [getPost, setGetPost]=useState(null)
    const [postUpdate,setPostUpdate]=useState()
    const [img,setImg]=useState()

    useEffect(() => {
        api.fetchPostById(postId)
            .then((res) => {
                console.log("post data is",res.data)
                setGetPost(res.data)
                setPostUpdate(res.data)
                setImg(res.data.image)
            })
    },[])

    return(
    <div>
        {
            getPost!=null?(
                <div className='row'>
                    <div className='col-sm-7' style={{marginTop:"60px"}}>
            <div className='post' style={{width:"50%"}}>
        <div className='post-topbar'>
        <div className='creator'>
            <h4>{getPost.creator}</h4>
            <p>{moment(getPost.createdAt).fromNow()}</p>
        </div>
        </div>
        <img src={getPost.image}></img>
        <div className='post-content'>
            <div className='tags'>
            {
                getPost.tags.map((tag,i) => {
                    return (<span className='tag' key={i}>#{tag}</span>)
                })
            }
            </div>
            <h1>{getPost.title}</h1>
            <p>{getPost.message}</p>
        </div>
    </div>
        </div>
        <div className='col-sm-5'>
            <div style={{marginTop:"30px"}}>
            <h5 className='text-center'>Update your Post</h5>
                    <div className='form-group mb-3'>
                        <label htmlFor='name'>Creator</label>
                        <input id="name" type="text" defaultValue={getPost.creator} className="form-control" onChange={(e) => setPostUpdate({...postUpdate, creator:e.target.value})}  />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='title'>Title</label>
                        <input id="title" type="text" defaultValue={getPost.title} className="form-control" onChange={(e) => setPostUpdate({...postUpdate, title:e.target.value})}  />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='message'>Message</label>
                        <textarea id="message" type="text" defaultValue={getPost.message} className="form-control" onChange={(e) => setPostUpdate({...postUpdate, message:e.target.value})}  />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='tags'>Tags</label>
                        <input id="tags" type="text" defaultValue={getPost.tags} className="form-control" onChange={(e) => setPostUpdate({...postUpdate, tags:e.target.value})} />
                    </div>
                    <div className='form-group' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <img src={img} style={{width:"50%",marginTop:"15px"}} />
                        <div className='image-actions' style={{padding:"10px"}}>
                        <div>
                            <b style={{marginBottom:"10px"}}>Change Image:</b>
                                <FileBase64 multiple={false} onDone={({base64}) => {
                                    setPostUpdate({...postUpdate, image:base64})
                                    setImg(base64)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className='form-group text-center' style={{marginTop:"30px"}}>
                        <button className='btn btn-primary' onClick={() => 
                            dispatch(updatePost(postUpdate))
                                .then(() => {
                                    navigate('/',{replace: true})
                                })
                            } style={{width:"100%"}}>Update Post</button>
                    </div>
                </div>
        </div>
                </div>
            ):(
                <h1>Loading Wait</h1>
            )
        }
    </div>)
}