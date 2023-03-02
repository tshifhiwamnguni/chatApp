import React from 'react'
import ArchiveButton from '../../components/archiveButton/ArchiveButton'
import ContactsList from '../../components/contacts/ContactsList'
import ContactsHead from '../../components/ContactsHead/contactHead/ContactsHead'
import classes from './Contacts.module.scss'



function Contacts() {
  return (
    <div className={classes.main}>

      <ContactsHead/>
      <div className={classes.container}>
      <ArchiveButton/>
       <ContactsList/>
      </div>
      
    </div>
  )
}

export default Contacts