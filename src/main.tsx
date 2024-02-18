import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import Error from './components/Error'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <App />, 
    errorElement:<Error/>
},{
    path:'/about', 
    element: <About />
},{
    path:'/login',
    element: <Login />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
