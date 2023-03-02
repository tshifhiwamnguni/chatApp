import React from 'react'
import classes from './BottomHead.module.scss'
function BottomHead() {
  return (
    <div className={classes.main}>
      <div className={`${classes.tab} ${classes.active}`}>chats</div>
      <div className={classes.tab}>status</div>
      <div className={classes.tab}>calls</div>
    </div>
  )
}

export default BottomHead