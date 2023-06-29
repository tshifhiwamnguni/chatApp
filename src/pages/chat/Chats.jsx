
import io from "socket.io-client"
import { RxPaperPlane } from "react-icons/rx";
import wp1 from "../../assests/WP1.jpeg";
import ChatHead from "../../components/chatHead/ChatHead";
import ChatsComponent from "../../components/chats/ChatsComponent";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { postMessage, getMessages } from "../../services/chatService";
import classes from './Chats.module.scss'

const socket = io('http://localhost:3002')


function Chats() {



 //states
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();
  const [recieverID, setRecieverID] = useState();

  //variables
  let { id } = useParams();



  useEffect(() => {

    socket.on("connection", () => {
      console.log('Connected to server');
    });

    socket.emit("join", "642287bc72edfa2a1b27320elunachat1")
    
    setRecieverID(id)
    let data = {
      "chatID": "642287bc72edfa2a1b27320elunachat1"
    }
    getMessages(data).then(
      (data) => {
        console.log(data);
        setMessages(data.data)
      }
    )

  }, [])


  useEffect(()=>{
      socket.on('chat message',(data)=>{
        
        setMessages([...messages, data])
        messages.push(data)
        console.table(data);
        console.log("array: ",messages);
      })
  },[socket])

  const sendMessage = async() => {

    let data = {
      room: "642287bc72edfa2a1b27320elunachat1",
      sender: localStorage.getItem('id'),
      reciever: recieverID,
      message: text
    };

    // postMessage(data).then(
    //   (data) => {
    //     console.log(data);
    //   }
    // )
    await socket.emit('chat message', data);
    console.log(data);
    if(text !== ""){
      setMessages([...messages, data])
    }
    
    // console.log(messages);

  };

  return (
    <div className={classes.main} style={{ backgroundImage: `url(${wp1})` }}>
      <ChatHead />
      <div className={classes.chats}>
        <ChatsComponent message={messages} />
      </div>
      <div className={classes.input_group}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => sendMessage()}>
          <RxPaperPlane className={classes.icon} />
        </button>
      </div>
    </div>

  );
}

export default Chats