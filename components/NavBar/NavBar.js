import Image from "next/image";
import styles from "./NavBar.module.scss";

import { AppContext } from "../../pages";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const { setDrawer, currentScrollPos } = useContext(AppContext);
  const [viewportHeight, setViewportHeight] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(null);

  const handleChange = (e) => {
    setDrawer(e.target.checked);
  };

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);
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

      <div className={styles.navOptions}>
        <ul>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li className={styles.navOptionsStar}>
            <Icon icon="emojione:eight-pointed-star" />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
