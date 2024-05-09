import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"



const useLogin = () => {
  const [loading,setLoading]=useState(false)
  const{setAuthUser}=useAuthContext()
  const login=async(username,password)=>{


    const success = handleInputErrors({
      
      username,
      password,
     
    });
    if (!success) return;
    setLoading(true);
    try{
      const response=await fetch("/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          password
        })
      })
      const data=await response.json()
      console.log(data)
      if(data.error){
        toast.error(data.error)
        setLoading(false)
      }
        localStorage.setItem("user",JSON.stringify(data))
        setAuthUser(data)
        setLoading(false)
        toast.success("Logged in successfully",{
          style: {
            padding: "12px",
            padding: "12px",
          
            height:"40px",
            backgroundColor: "darkviolet",
            color: "white",
          },
        })
  
    }
    catch(err){
    
      setLoading(false)
      toast.error("Something went wrong",{
        style: {
          padding: "12px",
          padding: "12px",
        
          height:"40px",
          backgroundColor: "grey",
          color: "white",
        },
      })
    }
  }

  return {
    loading,
    login
  }
}

export default useLogin


function handleInputErrors({
 
  username,
  password,
  
}) {
  if ( !username || !password ) {
    toast.error("Please fill in all fields",{
      style: {
        padding: "12px",
        padding: "12px",
      
        height:"40px",
        backgroundColor: "grey",
        color: "white",
      },
    });
    return false;
  }
  return true;
}