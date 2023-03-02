import React from 'react'
import TopHead from '../topHead/TopHead'
import BottomHead from '../bottonHead/BottomHead'
import classes from './ContactHead.module.scss'
function ContactsHead() {
  return (
    <div className={classes.main}>
        <TopHead/>

        <BottomHead/>

    </div>
  )
}

export default ContactsHead