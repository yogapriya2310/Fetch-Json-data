import React from 'react'

const Users = ({usersarr}) => {

  return (
    <div className='Userspage' >
     <ul>
{
   usersarr.map((user, index)=>
     <li key={index} >Name: {user.name} ,Email: {user.email}   </li>
   )
}
</ul>
    </div>
  )
}

export default Users

