import React, { useRef, useState } from 'react'
import './index.css';
import './content.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const Content = (props) => {
   
    const {items, handlechecked, handledelete, isdata, fetchError , isLoading} = props
   const ani = isdata ? "shake-horizontal" : "" 

  return (
    <div className='listulcontainer container  ' >
      <p className={ani} >{isdata ? "please enter a list!" :""}</p>
      <p>{isLoading? "Please wait while loading...": null}</p>
     {items.length ? 
        <ul className='ulcontainer' >
        {
            items.map((list, index)=> (
                <li key={index} className='licontainer' >
                <input type="checkbox" id={index} checked={list.checked} onChange={(e)=>handlechecked(e, index, list.id)} />
                <label htmlFor={index}  className={list.clas}   >{list.item}</label> 
                <IoCloseCircleOutline className='deletebtn' onClick={(e)=>handledelete(e, index)}  /> <br />
           


              </li>
            ))
        }
          
      </ul>
     : 
 
       <div>
       
      { items.length>=0 && isLoading ? null : <p>"Your list is empty now.."</p> }
       </div>
       
     
     }
     </div>
  )
}

export default Content
