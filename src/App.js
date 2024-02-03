import React, { useRef, useState, useEffect } from 'react'
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import './index.css';

function App() {
  const [items, setItems] = useState([
     
  ]);
  const inputRef = useRef()
  const [newlist, setnewlist] = useState('')
  const [isdata, setIsData] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true) 

  const API_URL =  'http://localhost:3500/items'

  useEffect(()=>{
    const fetchItems = async ()=>{
      try{
        const response = await fetch(API_URL)
        if(!response.ok ){throw Error("data not found")}
        const listItems = await response.json();
        setItems(listItems)
        setFetchError(null)
      }
      catch(err)
      {
         setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
      
    }
    
    setTimeout(()=>{
      (async()=>{await fetchItems()})()
    },2000)

  }, [])

  function handlechecked(e, inputindex)
  {
  const itemss = items.map((item, index)=> index===inputindex ? {...item, checked:!item.checked, clas: item.checked ? "": "pressed"}: item )
   setItems(itemss)
  
  }

  function handledelete(e, inputindex)
  {
   const itemsdelete = items.filter((item,index)=> index!== inputindex )
   setItems(itemsdelete)
  }
  
  function handlelistonchange(e)
  {
    const newli = e.target.value;
    setnewlist(newli)
    setIsData(false)
  }

  function handleemptyaddnewlist(e)
  {
   if(newlist)
   {
     const newitem = {checked: "",  
     item: newlist,
     clas:""}
    setItems(previous => [...previous, newitem ])
     setnewlist("")
   inputRef.current.focus()
   }else{
    setIsData(!isdata)
    inputRef.current.focus()
    setTimeout(() => {
      setIsData("");
    }, 2000);
   }
    
  }
  
  function handleemptyaddKeyDown(e)
  {
   if(newlist && e.key === "Enter")
   {
       setItems(previous => [...previous,{checked: "",  
   item: newlist,
   clas:""} ])
   setnewlist("")
   inputRef.current.focus()
    }
   else{
 
    setIsData(!isdata)
    inputRef.current.focus()
    setTimeout(() => {
      setIsData("");
    }, 2000);
    }
    
  }
  
  return (
    <div>
      <Header />
      <AddItem  
         handlelistonchange = {handlelistonchange}
         handleemptyaddKeyDown = {handleemptyaddKeyDown} 
         handleemptyaddnewlist ={handleemptyaddnewlist}
         inputRef={inputRef}
         newlist={newlist}
      />
      <Content 
          items={items}
          handlechecked = {handlechecked}
          handledelete = {handledelete}
          isdata={isdata}
          fetchError = {fetchError}
          isLoading = {isLoading}
      />
      <Footer />
     </div>
  );
}

export default App;
