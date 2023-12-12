import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Main from './components/RootPage/Main.jsx'
import EducationSection from './components/Education/Education.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/edu",
        element:<EducationSection></EducationSection>,
      },{
        path:"/about",
        element:<AboutMe></AboutMe>
      }
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)