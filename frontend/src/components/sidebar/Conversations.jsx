import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  // Convert conversation object into array
  const conversationArray = Object.values(conversations);
 
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationArray.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversationArray.length - 1}
        />
      ))}
      ;
      {loading ? 
        <span className="loading loading-spinner mx-auto"></span>
       : null}
    </div>
  );
};

export default Conversations;
