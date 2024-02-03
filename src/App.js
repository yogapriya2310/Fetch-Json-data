import React, { useState } from "react"; 
import Headeroption from "./Headeroption";
import './index.css'  
import Users from "./Users";
import apiRequest from "./apiRequest";
import Posts from "./Posts";
import Photos from "./Photos";
import Comments from "./Comments";

function App() {
  
  const [usersarr, setUsersarr] = useState([])
  const [postsarr, setpostsarr] = useState([])
  const [commentsarr, setcommentsarr] = useState([])
  const [error, setError]= useState(null)
  
  const usersurl = 'https://jsonplaceholder.typicode.com/users'

  const showusers = async ()=>{ 
     const usersjson =await apiRequest(usersurl)
     setUsersarr(usersjson)
    setpostsarr([])
    setcommentsarr([])

  }
   
  const showposts = async ()=>
  {
    const showpostsurl = 'https://jsonplaceholder.typicode.com/posts'
    setpostsarr(await apiRequest(showpostsurl))
    setUsersarr([])
    setcommentsarr([])
  }

  const showComments = async ()=>
  {
    const showphotosurl = 'https://jsonplaceholder.typicode.com/photos'
    setcommentsarr(await apiRequest(showphotosurl))
    setUsersarr([])
    setpostsarr([])

  }  

  return (
    <div>
      <Headeroption showusers={showusers} showposts={showposts} showComments={showComments}  />
      <section className="contentsec" >
         <Users usersarr={usersarr} />
         <Posts postsarr={postsarr} />
         <Comments  commentsarr={commentsarr} />
      </section>
    </div>
  );
}

export default App;
