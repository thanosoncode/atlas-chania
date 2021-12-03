import Link from "next/link";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h2>new way to build a healthy lifestyle</h2>
      <h1>
        WE TEACH YOU <br />
        HOW TO LIFT THE WORLD
      </h1>
      <div className={headerStyles.btns}>
        <Link href="#contact">
          <button className={headerStyles.btn}>GET STARTED</button>
        </Link>
        <Link href="#about">
          <button className={headerStyles.outline}>LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
