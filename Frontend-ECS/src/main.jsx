import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'
import AboutUs from './pages/home/AboutUs.jsx'
import Members from './pages/members/Members.jsx'
import Developers from './pages/developers/developers.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element:<Home/>
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "members",
        element: <Members/>
      },
      {
        path: "developers",
        element: <Developers/>
      },
      {
        path: "sign-in",
        element: <Signin/>
      },
      {
        path: "sign-up",
        element: <Signup/>
      },
      {
        path: "profile",
        element: <Profile/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)