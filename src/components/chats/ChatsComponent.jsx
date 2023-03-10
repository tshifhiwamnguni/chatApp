import React from 'react'
import classes  from  './ChatsComponent.module.scss'
function ChatsComponent(props) {
  return (
    <div className={classes.chats}>
          {props.message.map((message, index) => (
            <div
              className={parseInt(message.id)=== parseInt(props.id) ? "classes.myText" : "classes.otherText"}
              key={index}
            >
              <div className={parseInt(message.id) === parseInt(props.id) ? "classes.me" : "classes.other"}>
                <span className="text">{message.message}</span>{" "}
              </div>
            </div>
          ))}
        </div>
  )
}

export default ChatsComponent