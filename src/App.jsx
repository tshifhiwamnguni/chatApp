import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import { RxPaperPlane } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { IoIosCall, IoIosSettings } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import wp1 from "./assests/WP1.jpeg";

function App() {
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


  function  clearchagesHandler(){
    setMessages([])
  }
  return (
    <div className={`main`} style={{ backgroundImage: `url(${wp1})` }}>
      <div className="head">
        <div className="left-panel">
          <div className="icon_back">
            <BiArrowBack className="icon_back" />
          </div>

          <img src="" alt="" />
          <div className="user_details">
            <div>ANGEL</div>
            <div>online</div>
          </div>
        </div>
        <div className="right-panel">
          <div>
            <BsCameraVideoFill />
          </div>
          <div>
            {" "}
            <IoIosCall />
          </div>
          <div>
            <div className="dropdown">
              <button className="dropbtn">
                <IoIosSettings />
              </button>
              <div className="dropdown-content">
                <a href="#">Contact info</a>
                <a href="#">Media, links, docs</a>
                <a href="#">search</a>
                <a href="#">Mute notification</a>
                <a href="#">Disappearing messages</a>
                <a href="#">wallpaper</a>
                <a onClick={clearchagesHandler}> clear chats</a>
                <a href="#">Report</a>
                <a href="#">Block</a>
                <a href="#">Export chats</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chats">
        {messages.map((message, index) => (
          <div
            className={message.id == id ? "myText" : "otherText"}
            key={index}
          >
            <div className={message.id == id ? "me" : "other"}>
              <span className="text">{message.message}</span>{" "}
            </div>
          </div>
        ))}
      </div>
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

export default App;
