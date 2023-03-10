import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './BottomHead.module.scss'

function BottomHead() {
  return (
    <div className={classes.main}>
      <NavLink className={`${classes.tab} ${classes.active}`} style={{ textDecoration: "none", color: "white" }}>chats</NavLink>
      <NavLink className={classes.tab} style={{ textDecoration: "none", color: "white" }} to='/status'>status</NavLink>
      <NavLink className={classes.tab} style={{ textDecoration: "none", color: "white" }}>calls</NavLink>
    </div>
  )
}

export default BottomHead