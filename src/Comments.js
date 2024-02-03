import React from 'react'

const Comments = ({commentsarr}) => {

    const reducedphtos = commentsarr.slice(0, 50);

  return (
    <div className='Userspage'>
        <ul className='photosul'>
        {
        reducedphtos.map((photo)=>
        <li key={photo.id}>
            <img src={photo.url} alt={photo.title} className='photos' />
        </li>
        )
      }
        </ul>
        
    </div>
  )
}

export default Comments