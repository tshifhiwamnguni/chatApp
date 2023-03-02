import React from "react";
import classes from "./ContactCard.module.scss";
import WP1 from './../../assests/WP1.jpeg'
import {useNavigate} from 'react-router-dom'

function ContactCard(props) {
  const navigate = useNavigate()

  function toChat(data){
   
      navigate(`/chats/${data.id}`)
      localStorage.setItem('name', data.username)
      localStorage.setItem('id', data.id)
  }

  return (
    <div className={classes.main}>
      <div className={classes.details}>
        <div><img src={WP1} alt="" /></div>
        <div className={classes.detail} onClick={()=>{
            toChat(props.person)

        }}>
          <span>{props.person.username}</span>
          <span>the car was lit</span>
        </div>
      </div>
      <div>10:29</div>
    </div>
  );
}

export default ContactCard;
