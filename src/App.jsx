import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Layout from './Layout/Layout'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import NotFound from './NotFound/NotFound'




function App() {

  let x= createBrowserRouter([
    {path: "" , element: <Layout /> , children:[
      {index : true , element:<Home />},
      {path: "about" , element:<About />},
      {path: "portfolio" , element:<Portfolio />},
      {path: "contact" , element:<Contact />},
      {path: "*" , element:<NotFound />},
      
    ]}
    
  ],
  {
    basename:"/Start-Framework"
  }
)
  

  return (
    <>

    <RouterProvider router={x}></RouterProvider>
      
    </>
  )
}

export default App
