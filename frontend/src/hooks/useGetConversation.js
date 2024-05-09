import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data.allUsers);
        console.log("COnvo",conversations);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);
  return { loading, conversations };
};

export default useGetConversation;
