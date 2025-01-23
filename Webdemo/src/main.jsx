import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Grid from './components/Grid/Grid.jsx';
import Home from './components/Home/Home.jsx';
import Linkedin from './components/Linkedin/Linkedin.jsx';

import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';  // Import the Layout component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use Layout component to wrap all pages
    children: [
      {
        path: "home",
        element: <Home />, // Define routes within Layout
      },
      {
        path: "/",
        element: <Grid />,
      },
      {
        path: "linkedin",
        element: <Linkedin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* Pass the router to RouterProvider */}
  </StrictMode>
);
