import Image from "next/image";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <img src="Logo.png" alt="gravitea logo" className={styles.logo} />

      <button className={styles.navBtn}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </button>
    </div>
  );
};

export default NavBar;
