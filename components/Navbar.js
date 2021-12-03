import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinksRow from "./LinksRow";
import LinksColumn from "./LinksColumn";
import logo from "../public/logo2.jpg";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import navbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={navbarStyles.nav} id="home">
        <div className={navbarStyles.center}>
          <Image src={logo} width="30px" height="30px" />
          <h1>
            <Link href="#home">Atlas Chania</Link>
          </h1>
          {showMenu ? (
            <div
              className={navbarStyles.menu}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <AiOutlineClose style={{ fontSize: "1.8rem" }} />
            </div>
          ) : (
            <div
              className={navbarStyles.menu}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <HiOutlineMenu style={{ fontSize: "1.8rem" }} />
            </div>
          )}
          {/* <div
            className={navbarStyles.menu}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <span className={navbarStyles.one}></span>
            <span className={navbarStyles.two}></span>
            <span className={navbarStyles.three}></span>
          </div> */}

          <LinksRow />
        </div>
        <LinksColumn showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
