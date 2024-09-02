import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider router={router}  />

)