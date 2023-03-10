import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import second from './../../assests/WP1.jpeg'
import SettingsDropdown from "../settingsDropdown/SettingsDropdown";
import {useNavigate} from 'react-router-dom'
import classes from './Chathead.module.scss'
function ChatHead() {

const [name , setName] = useState()
const [id , setId] = useState()
    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setId(localStorage.getItem('id'));
    },[])
    console.log(name);
    console.log(id);
  
    const navigate = useNavigate()

    function back(){
        navigate(-1)
    }

  return (
    <div className={classes.head}>
          <div className={classes.left_panel}>
            <div className={classes.icon_back} onClick={back}>
              <BiArrowBack className={classes.icon_back}  />
            </div>
            <img src={second} alt="" />
            <div className={classes.user_details}>
              <div>{name}</div>
              <div>online</div>
            </div>
          </div>
          <div className={classes.right_panel}>
            <div>
              <BsCameraVideoFill />
            </div>
            <div>
              {" "}
              <IoIosCall />
            </div>
            <div>
           <SettingsDropdown/>
            </div>
          </div>
        </div>
  )
}

export default ChatHead