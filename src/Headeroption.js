import React from 'react'
import './index.css'
import Users from './Users'

const Headeroption = ({showusers, showposts, showComments}) => {

    const uloptions = ["Users", 'Posts', 'Comments']

  return (
    <>
    <header className='headermain   ' >
    <div onClick={()=>{showusers()}} >users</div>
    <div onClick={()=>{showposts()}} >Posts</div>
    <div onClick={()=>{showComments()}} >Images</div>
    </header>
    
    </>
  )
}

export default Headeroption


/* {
  <div onClick={()=>{showusers()}} >users</div>
  <div onClick={()=>{showposts()}} >Posts</div>
  <div onClick={()=>{showComments()}} >Comments</div>
} */