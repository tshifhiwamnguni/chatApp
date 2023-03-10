import React from 'react'

import {
    createBrowserRouter,

  } from "react-router-dom";
import Chats from './pages/chat/Chats';

import Contacts from './pages/contacts/Contacts';
import LandingPage from './pages/landingPage/LandingPage';
import StatusPage from './pages/status/StatusPage';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      
     },{
     path: "/chats/:id",
     element: <Chats/>,
     
    },{
      path: "contacts",
      element: <Contacts/>,
      
     },
     {
      path: "status",
      element: <StatusPage/>,
      
     },

    ]);
  

export default Router