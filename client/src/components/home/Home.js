import React,{useEffect} from 'react'
import { Posts } from '../posts/Posts'
import { Form } from '../form/Form'

export const Home=({user}) => {
    return(
        <div className='row'>
        <div className='col-sm-7'>
            <Posts user={user} />
        </div>
        <div className='col-sm-5'>
            <Form user={user} />
        </div>
    </div>
    )
}