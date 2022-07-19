import  {Link} from "react-router-dom"
import '../style.css'
export default function Navbar() {
  return (
    <nav>
      <div className="nav-list" id="myTopnav">
        <div className="nav-items">
        <Link to="../pages/Login" >Login</Link>
        <Link to="../pages/Home">Home</Link>
        <Link to="../pages/News">News</Link>
        <Link to="../pages/Contact">Contact</Link>
        <Link to="../pages/About">About</Link>
        </div>
    </div>
    </nav>
  )
}
    



/* <link to="../pages/Home.js">Home</link>
<link to="../pages/About.js">About</link>
<link to="../pages/Contact.js">Home</link>
<link to="../pages/News.js">News</link> */