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
        <button className={headerStyles.btn}>GET STARTED</button>
        <button className={headerStyles.outline}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Header;
