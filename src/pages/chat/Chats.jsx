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
    const [myId, setMyId] = useState();
    useEffect(() => {
      setMyId(3)
      setId(localStorage.getItem('id'));
  
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
    console.log('my id ' ,myId);
  console.log('other id ' , id);
    const sendMessage = (txt) => {
      console.log("message ", text, " id ", id);
      let data = {
        id: 3,
        message: txt,
      };
      console.log(messages);
      socket.emit("message", data);
    };

let arr = []

function shaggy(ind){
  arr[ind] = 'adbvkjasdvfavsfjlav '

  console.log(arr);
}



    return (
      <div className={`main`} style={{ backgroundImage: `url(${wp1})` }}>
        <ChatHead/>
       <ChatsComponent message={messages} id={myId}/>
        <div className="input_group">
          <input type="text" onChange={(e) => setText(e.target.value)} />
  
          <button onClick={() => shaggy(' kjdsbkjlbdklag')}>
            {" "}
            <RxPaperPlane className="icon" />
          </button>
        </div>
      </div>
    );
}

export default Chats