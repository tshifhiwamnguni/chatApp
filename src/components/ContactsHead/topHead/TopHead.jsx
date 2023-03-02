import React from 'react'
import classes from './TopHead.module.scss'
import {HiOutlineCamera, HiOutlineSearch} from 'react-icons/hi'
import {IoIosSettings } from "react-icons/io";
function TopHead() {
  return (
    <div className={classes.main}>
        <div className={classes.logo}>
            LunaChat
        </div>
        <div className={classes.right_panel}>
            <div>
                <HiOutlineCamera className={classes.icon}/>
            </div>
            <div>
                <HiOutlineSearch className={classes.icon}/>
            </div>
            <div>
            <IoIosSettings  className={classes.icon}/>
            </div>
        </div>

        
    </div>
  )
}

export default TopHead