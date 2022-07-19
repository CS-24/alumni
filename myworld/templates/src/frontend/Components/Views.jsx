import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home.js"
import News from "../pages/News.js"
import Contact from "../pages/Contact.js"
import About from "../pages/About.js"

const Views = () =>{
    return (
        <Routes>
          <Route index ="../../App.js"/>
          <Route path="../pages/Home" element={<Home/>}/>
          <Route path="../pages/News" element={<News/>}/>
          <Route path="../pages/About" element={<About/>}/>
          <Route path="../pages/Contact" element={<Contact/>}/>
          <Route path="*" element={<div>404 Not Found!</div>}/>

        </Routes>
        
        )
};

export default Views;