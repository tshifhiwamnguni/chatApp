import React from 'react'
import { Outlet } from 'react-router-dom'
import ContactsHead from '../../components/ContactsHead/contactHead/ContactsHead'

function HomePage() {
  return (
    <div>
        <ContactsHead/>
        <Outlet/>

    </div>
  )
}

export default HomePage