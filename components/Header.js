import Link from "next/link";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h2 data-aos="zoom-in">
        become the best <br />
        not just better
      </h2>
      <h1 data-aos="zoom-in">
        WE TEACH YOU <br />
        HOW TO LIFT THE WORLD
      </h1>
      <div className={headerStyles.btns} data-aos="fade-up">
        <Link href="#about" passHref={false}>
          <button className={headerStyles.btn}>LEARN MORE</button>
        </Link>
        <Link href="#contact" passHref={false}>
          <button className={headerStyles.outline}>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
