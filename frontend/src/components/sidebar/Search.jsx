import React, { useState } from 'react'
import "./Sidebar.css";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from "../../hooks/useGetConversation"
import toast from 'react-hot-toast';
const Search = () => {
  const [search,setSearch]=useState("")
const {setSelectedConversation}=useConversation()
const {conversations}=useGetConversation()
  const handleSUbmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3)
      {
        return toast.error("search content should be at least 3 characters long")
      }

      const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
      if(conversation)
        {
          setSelectedConversation(conversation)
          setSearch("")
          
        }
        else{
          toast.error("No such user found")
        }
  }
  return (
    <form onSubmit={handleSUbmit}className='flex gap-2 search' >
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full in ' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
    <IoSearchOutline className='w-6 h-6 outline-none ser' />
    </button>
  </form>
  )
}

export default Search