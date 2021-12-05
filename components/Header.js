import Link from "next/link";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h2>
        don&apos;t just become better
        <br />
        become the best
      </h2>
      <h1>
        WE TEACH YOU <br />
        HOW TO LIFT THE WORLD
      </h1>
      <div className={headerStyles.btns}>
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
