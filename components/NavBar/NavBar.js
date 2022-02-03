import Image from "next/image";
import styles from "./NavBar.module.scss";

import { AppContext } from "../../pages";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavBar = () => {
  const { setDrawer, height, goToSection, section } = useContext(AppContext);
  let { scroll } = useLocomotiveScroll();

  const handleChange = (e) => {
    setDrawer(e.target.checked);
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      exit={{ y: "-100%" }}
      transition={{ ease: "easeIn" }}
      className={`${styles.wrapper} ${
        height > 200 ? styles.wrapperColored : styles.wrapperTransparent
      }`}
      id="navbar"
      data-scroll-sticky
    >
      <div className={styles.wrapper2}>
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
              <a
                className={`${section === "about" && styles.focused}`}
                href="#about-section"
                onClick={(e) => goToSection(e, "about")}
              >
                about
              </a>
            </li>
            <li>
              <a
                className={`${section === "menu" && styles.focused}`}
                id="nav-menu"
                href="#menu-section"
                onClick={(e) => goToSection(e, "menu")}
              >
                menu
              </a>
            </li>
            <li>
              <a
                className={`${section === "contact" && styles.focused}`}
                id="nav-contact"
                href="#contact-section"
                onClick={(e) => goToSection(e, "contact")}
              >
                contact
              </a>
            </li>

            <li className={styles.navOptionsStar}>
              <Icon icon="emojione:eight-pointed-star" />
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon icon="brandico:facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon icon="cib:instagram" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
