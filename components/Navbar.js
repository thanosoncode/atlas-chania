import navbarStyles from "../styles/Navbar.module.css";
import { FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav} id="home">
      <div className={navbarStyles.center}>
        <h1>
          <a href="#home">Atlas Chania</a>
        </h1>
        <ul className={navbarStyles.links}>
          <li>
            <a href="/#about">About us</a>
          </li>
          <li>
            <a href="/#classes">Classes</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <ul className={navbarStyles.socials}>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
