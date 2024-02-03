import React from 'react'

const AddItem = (props) => {

    const {handlelistonchange, handleemptyaddKeyDown, handleemptyaddnewlist, inputRef, newlist } = props

  return (
    <div className='  container  addItem' >
        
        <input 
        style={{padding:"5px"}} 
        placeholder='enter a new list' 
        autoFocus
        ref={inputRef}
        value={newlist}
        onChange={(e)=>handlelistonchange(e)} 
        onKeyDown={(e)=>handleemptyaddKeyDown(e)}
        ></input> {" "}
        <button className='addbtn' type='submit' style={{padding:"5px", }} onClick={handleemptyaddnewlist} >add</button>
         
    </div>
  )
}

export default AddItem
