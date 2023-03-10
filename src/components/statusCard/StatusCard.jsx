import React from 'react'
import classes from './statusCard.module.scss'
function StatusCard() {
  return (
    <div className={classes.main}>
        <img src="" alt="" />
        <div className={classes.details}>
            <div> name</div>
            <div> 9 mins ago</div>
        </div>
    </div>
  )
}

export default StatusCard