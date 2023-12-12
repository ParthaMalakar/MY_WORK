import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Main from './components/RootPage/Main.jsx'
import EducationSection from './components/Education/Education.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Portfolio from './components/Projects/Myproject.jsx'
import ContractMe from './ContractMe/ContractMe.jsx'
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
      },{
        path:"my",
        element:<Portfolio></Portfolio>
      }
     ,{
      path:"hire",
      element:<ContractMe></ContractMe>
    }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)