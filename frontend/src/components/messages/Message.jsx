import React from 'react'
import "./Message.css"
import {useAuthContext} from "../../context/AuthContext"
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser}=useAuthContext()
 const {selectedConversation}= useConversation()

 const fromMe = message.senderId === authUser._id;
 const chatClassName=fromMe ? "chat-end" :"chat-start";
 const formattedTime=extractTime(message.createdAt)
 const profilePic= fromMe ? authUser.profilePic :selectedConversation?.profilePic;
 const bubbleBgColor= fromMe ?  "bg-violet-500" :"";

const shakeClass=message.shouldShake? "shake" :"";

  return (
   <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
       <div className="rounded-full imag" >
        <img src={profilePic} alt="image"  className='imag'></img>

       </div>
      </div>
     
      <div className={`chat-bubble text-white bg-violet-500 ${bubbleBgColor} ${shakeClass} pb-2 box1`}>{message.message} </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
   </div>
  )
}

export default Message