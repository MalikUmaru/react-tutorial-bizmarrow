import { Link } from "react-router-dom";
import './Navbar.css' 
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-brand">Your Web Logo</div>
      <div className="nav-items-container">
        <li className="nav-item">
        <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
        <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item">
        <Link to={"/signin"}>Sign In</Link>
        </li>
        <li className="nav-item">
        <Link to={"/signup"}>Sign Up</Link>
        </li>
        <li className="nav-item">
        <Link to={"/policies"}>Policies</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
