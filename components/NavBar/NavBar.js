import Image from "next/image";
import styles from "./NavBar.module.scss";

import { AppContext } from "../../pages";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const { setDrawer, currentScrollPos } = useContext(AppContext);
  const [viewportHeight, setViewportHeight] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setDrawer(e.target.checked);
  };

  useEffect(() => {
    console.log(currentScrollPos);
  }, [currentScrollPos]);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      exit={{ y: "-100%" }}
      transition={{ ease: "easeIn" }}
      className={`${styles.wrapper} ${
        viewportHeight && currentScrollPos > viewportHeight
          ? styles.wrapperColored
          : styles.wrapperTransparent
      }`}
      id="navbar"
    >
      <img src="Logo.png" alt="gravitea logo" className={styles.logo} />
      {/* onClick={() => setDrawer(true)} */}

      <input
        className={styles.input}
        type="checkbox"
        id="navBtn"
        onChange={handleChange}
        hidden
      />
      <label htmlFor="navBtn" className={styles.navBtn}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </label>
    </motion.div>
  );
};

export default NavBar;
