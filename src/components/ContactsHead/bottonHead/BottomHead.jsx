import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './BottomHead.module.scss'

function BottomHead() {
  return (
    <div className={classes.main}>
      <NavLink className={classes.tab}style={{ textDecoration: "none", color: "white", display:"flex", justifyContent:"center", width:"100%"}} to='/contacts'>chats</NavLink>
      <NavLink className={ classes.tab} style={{ textDecoration: "none", color: "white", display:"flex", justifyContent:"center", width:"100%"}} to='/status'>status</NavLink>
      <NavLink className={classes.tab} style={{ textDecoration: "none", color: "white", display:"flex", justifyContent:"center", width:"100%"}}  to='/calls'>calls</NavLink>
    </div>
  )
}

export default BottomHead