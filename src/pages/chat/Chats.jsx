
import io from "socket.io-client"
import { RxPaperPlane } from "react-icons/rx";
import wp1 from "../../assests/WP1.jpeg";
import ChatHead from "../../components/chatHead/ChatHead";
import ChatsComponent from "../../components/chats/ChatsComponent";
import React, { useEffect, useState } from "react";



import { BiArrowBack } from "react-icons/bi";
import { IoIosCall, IoIosSettings } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import classes from './Chats.module.scss'

function Chats() {


  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [text, setText] = useState();
  const [id, setId] = useState();

function clearChatsHandler() {
  setMessages([]);
}

const sendMessage = (txt) => {
  console.log("message ", text, " id ", id);
  let data = {
    id: id,
    message: txt,
  };
  console.log(messages);

  socket.emit("message", data);
};

  return (
    <div className={classes.main} style={{ backgroundImage: `url(${wp1})` }}>
    <ChatHead/>
    <div className={classes.chats}>
      <ChatsComponent  message={messages}/>
    </div>
    <div className={classes.input_group}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => sendMessage(text)}>
        <RxPaperPlane className={classes.icon} />
      </button>
    </div>
  </div>

  );
}

export default Chats