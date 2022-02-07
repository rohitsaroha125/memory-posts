import React,{useEffect} from 'react'
import { Posts } from '../posts/Posts'
import { Form } from '../form/Form'

export const Home=() => {
    return(
        <div className='row'>
        <div className='col-sm-7'>
            <Posts />
        </div>
        <div className='col-sm-5'>
            <Form />
        </div>
    </div>
    )
}