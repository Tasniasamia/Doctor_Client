import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './Component/Pages/Shared/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </div>
)
