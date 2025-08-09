import { Link } from "react-router-dom";

function Navbar() {
    return (
       <main>  
           <nav>
               <Link to="/">Home</Link>
               <Link to="/About">About</Link>
               <Link to="/Contact">Contact</Link>
               <Link to="/Services">Services</Link>
            </nav> 
       </main>
    );
}
export default Navbar;
