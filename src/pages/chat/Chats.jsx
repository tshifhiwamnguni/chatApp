import React, { useEffect, useState } from "react";
import io from "socket.io-client"
import { RxPaperPlane } from "react-icons/rx";
import wp1 from "../../assests/WP1.jpeg";
import ChatHead from "../../components/chatHead/ChatHead";
import ChatsComponent from "../../components/chats/ChatsComponent";

function Chats() {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [text, setText] = useState();
    const [id, setId] = useState();
  
    useEffect(() => {
      setId(parseInt(1 + Math.random() * (10 - 1)));
  
      const newSocket = io("http://localhost:3001");
  
      newSocket.on("connect", () => {
        console.log("Connected to socket server");
      });
  
      newSocket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
  
      setSocket(newSocket);
  
      return () => {
        newSocket.disconnect();
      };
    }, []);
  
    const sendMessage = (txt) => {
      console.log("message ", text, " id ", id);
      let data = {
        id: id,
        message: txt,
      };
      console.log(messages);
  
      socket.emit("message", data);
    };
  
    // function clearChatsHandler() {
    //   setMessages([]);
    // }
    return (
      <div className={`main`} style={{ backgroundImage: `url(${wp1})` }}>
        <ChatHead/>
       <ChatsComponent message={messages} id={id}/>
        <div className="input_group">
          <input type="text" onChange={(e) => setText(e.target.value)} />
  
          <button onClick={() => sendMessage(text)}>
            {" "}
            <RxPaperPlane className="icon" />
          </button>
        </div>
      </div>
    );
}

export default Chats