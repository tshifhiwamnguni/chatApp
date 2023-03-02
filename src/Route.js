import React from 'react'

import {
    createBrowserRouter,

  } from "react-router-dom";
import Chats from './pages/chat/Chats';

import Contacts from './pages/contacts/Contacts';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Contacts />,
      
     },{
     path: "/chats/:id",
     element: <Chats/>,
     
    },

    ]);
  

export default Router