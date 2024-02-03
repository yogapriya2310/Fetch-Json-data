import React from 'react'

const AddItem = (props) => {

    const {handlelistonchange, handleaddKeyDown, handleaddnewlist, inputRef, newlist } = props

  return (
    <div className='  container  addItem' >
        
        <input 
        style={{padding:"5px"}} 
        placeholder='enter a new list' 
        autoFocus
        ref={inputRef}
        value={newlist}
        onChange={(e)=>handlelistonchange(e)} 
        onKeyDown={(e)=>handleaddKeyDown(e)}
        ></input> {" "}
        <button className='addbtn' type='submit' style={{padding:"5px", }} onClick={handleaddnewlist} >add</button>
         
    </div>
  )
}

export default AddItem
