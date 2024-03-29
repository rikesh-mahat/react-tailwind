import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/Home.jsx';
import DetailPage from './pages/home/DetailPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Page not Found</div>,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : '/product/:id',
        element : <DetailPage />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
