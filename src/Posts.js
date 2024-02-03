import React from 'react'

const Posts = ({postsarr}) => {
  return (
    <div className='Userspage' >
    <ul>
       
      {
         postsarr.map((post, index)=>
           <li key={index} >Title: {post.title} , body: {post.body}   </li>
         )
      }
    </ul>
 </div>
  )
}

export default Posts