import React, { useEffect, useState } from 'react'


import classes  from  './ChatsComponent.module.scss'




function ChatsComponent(props) {

  const [messages, setMessages] = useState([])
  useEffect(() => {

  setMessages(props.message)
  }, [props.message])
 
  return (
    <div className={classes.chats}>
          {messages.map((message, index) => (
            <div
              key={index}
            >
              <div className={localStorage.getItem("id") === message.sender ? `${classes.me}`: `${classes.other}`}>
                <span className="text">{message.message}</span>{" "}
              </div>
            </div>
          ))}
        </div>
  )
}

export default ChatsComponent