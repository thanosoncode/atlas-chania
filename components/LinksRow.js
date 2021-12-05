import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import linksRowStyles from "../styles/LinksRow.module.css";

const LinksRow = ({ setShowMenu }) => {
  return (
    <ul className={linksRowStyles.links}>
      <li>
        <Link href="/#about" onClick={() => setShowMenu(false)}>
          About us
        </Link>
      </li>
      <li>
        <Link href="/#classes">Classes</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
      <ul className={linksRowStyles.socials}>
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
  );
};

export default LinksRow;
