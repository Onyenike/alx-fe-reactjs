import { Link } from "react-router-dom";

function Navbar() {
    return (
       <main>  
           <nav style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', fontSize: '16px', display: "flex", justifycontent: "center" }}>
               <Link to="/">Home</Link>
               <Link to="/About">About</Link>
               <Link to="/Contact">Contact</Link>
               <Link to="/Services">Services</Link>
            </nav> 
       </main>
    );
}
export default Navbar;
