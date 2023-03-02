import React from 'react'
import ContactCard from '../contactCard/ContactCard'
import {contacts} from './../../Data.js'
function ContactsList() {

  return (
    <div>
      {
        contacts.map((element,index)=>{
          return <ContactCard person={element} key={index} />
             
        })
      }
       
    </div>
  )
}

export default ContactsList