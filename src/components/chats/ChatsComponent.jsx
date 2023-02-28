import React from 'react'

function ChatsComponent(props) {
  return (
    <div className="chats">
          {props.message.map((message, index) => (
            <div
              className={parseInt(message.id)=== parseInt(props.id) ? "myText" : "otherText"}
              key={index}
            >
              <div className={parseInt(message.id) === parseInt(props.id) ? "me" : "other"}>
                <span className="text">{message.message}</span>{" "}
              </div>
            </div>
          ))}
        </div>
  )
}

export default ChatsComponent