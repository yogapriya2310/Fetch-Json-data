const apiRequest = async (url='', postOptions=null, errmsg=null)=>{
   try{
     const response = await fetch(url, postOptions)
     if(!response.ok){throw Error("data not found!")}
   }catch(err){
       errmsg = err.message
   }finally{
      return errmsg;
   }
}

export default apiRequest;