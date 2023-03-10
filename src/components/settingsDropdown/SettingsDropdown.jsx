import React from 'react'
import {IoIosSettings } from "react-icons/io";
import classes from './SettingsDropdown.module.scss'
function SettingsDropdown() {

    function clearChatsHandler() {
        // setMessages([]);
      }
  return (
    <div className={classes.dropdown}>
    <button className={classes.dropbtn}>
      <IoIosSettings />
    </button>
    <div className={classes.dropdown_content}>
      <div className='a'>Contact info</div>
      <div className='a'>Media, links, docs</div>
      <div className='a'>search</div>
      <div className='a'>Mute notification</div>
      <div className='a'>Disappearing messages</div>
      <div className='a'>wallpaper</div>
      <div className='a'onClick={clearChatsHandler}> clear chats</div>
      <div className='a'>Report</div>
      <div className='a'>Block</div>
      <div className='a'>Export chats</div>
    </div>
  </div>
  )
}

export default SettingsDropdown