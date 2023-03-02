import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    RouterProvider,
  } from "react-router-dom";
import Router from './Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={Router}/>
);
