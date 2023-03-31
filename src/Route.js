import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Chats from "./pages/chat/Chats";

import Contacts from "./pages/contacts/Contacts";
import LandingPage from "./pages/landingPage/LandingPage";
import StatusPage from "./pages/status/StatusPage";

import LoginPage from "./pages/loginPage/LoginPage";
import CallsPage from "./pages/CallsPage/CallsPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/chats/:id",
    element: <Chats />,
  },

  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "status",
    element: <StatusPage />,
  },
  {
    path: "calls",
    element: <CallsPage/>
  }
]);

export default Router;
