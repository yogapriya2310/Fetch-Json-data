const apiRequest = async (url="", optionsObj=null, errmsg=null)=>{
   try{
     const response = await fetch(url)
     const fetchjsondata = response.json()
     if(!response.ok){throw Error("cant reach the server")}
      return fetchjsondata;
   }catch(err){
      errmsg = err.message
   }finally{
      console.log(errmsg)
   }

}

export default apiRequest;