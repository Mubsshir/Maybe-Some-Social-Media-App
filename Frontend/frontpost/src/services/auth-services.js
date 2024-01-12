const API_BASE_URL = 'http://localhost:3000';

export const login= async(username,pass)=>{
  try{
    const res=await fetch(`${API_BASE_URL}/login`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username:username,pass:pass})
    })
    if(res.ok){
      const data=await res.json();
      return data;
    }
    return false;
  }catch(err){
    console.log("Error :"+err)
    return {message:'fail'}
  }
}


export const isAuthenticate=async()=>{
  try{
    const res=await fetch(`${API_BASE_URL}/api/isAuth`)
    if(res.ok){
      const data=await res.json();
      return data;
    }
    return {isAuthorized:false};
  }catch(err){
    console.log("Error :"+err)
    return {isAuthorized:false};
  }
}


export const logout= async()=>{
  try{
    const res=await fetch(`${API_BASE_URL}/logout`,{
      method:'POST'})
    if(res.ok){
      const data=await res.json();
      return data;
    }
    return false;
  }catch(err){
    console.log("Error :"+err)
    return {message:'fail'}
  }
}
