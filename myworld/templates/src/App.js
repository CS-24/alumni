import React from "react";
// import {useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Header from "./frontend/Components/Header.js"
 import Navbar from "./frontend/Components/Navbar.js"
 import Login  from "./frontend/pages/Login.js"
 import Signup  from "./frontend/pages/Signup.js"

//import Views from "./frontend/Components/Views.jsx"
import Home from "./frontend/pages/Home.js"
import News from "./frontend/pages/News.js"
import Contact from "./frontend/pages/Contact.js"
import About from "./frontend/pages/About.js"
import Profile from "./frontend/pages/Profile.js"

import "./frontend/style.css"

export default function App(){
  return(
   <div>

    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/"/>
          <Route path = "/pages/Profile"element={<Profile />}/>
          <Route path="/pages/Login" element={<Login/>}/>
          <Route path="/pages/Home" element={<Home/>}/>
          <Route path="/pages/News" element={<News/>}/>
          <Route path="/pages/About" element={<About/>}/>
          <Route path="/pages/Contact" element={<Contact/>}/>
          <Route path="/pages/Signup" element={<Signup/>}/>
          <Route path="*" element={<div>404 Not Found!</div>}/>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

// <Routes>
// <Route path="/" element={<Home/>} />
// <Route path="pages/News" element={<News/>} />
// <Route path="pages/Contact" element={<Contact/>} />
// <Route path="pages/About" element={<About/>} />
// </Routes>