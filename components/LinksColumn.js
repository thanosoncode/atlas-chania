import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import linksColumnStyles from "../styles/LinksColumn.module.css";

const LinksColumn = ({ showMenu }) => {
  const show = linksColumnStyles["links"] + " " + linksColumnStyles["show"];

  const hide = linksColumnStyles["links"];

  return (
    <ul className={showMenu ? show : hide}>
      <li>
        <Link href="/#about">About us</Link>
      </li>
      <li>
        <Link href="/#classes">Classes</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
      <ul className={linksColumnStyles.socials}>
        <li>
          <Link href="https://www.facebook.com/atlaschania/">
            <a target="_blank">
              <FaFacebookF />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/atlaschania/?hl=en">
            <a target="_blank">
              <FaInstagramSquare />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/channel/UCV6ECV2mgOZLrTIHP1Rwg4g">
            <a target="_blank">
              <FaYoutube />
            </a>
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default LinksColumn;
