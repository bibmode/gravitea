import Image from "next/image";
import styles from "./NavBar.module.scss";

import { AppContext } from "../../pages";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavBar = () => {
  const {
    setDrawer,
    height,
    setNavBar,
    setHeight,
    setSection,
    drawer,
    section,
  } = useContext(AppContext);

  let { scroll } = useLocomotiveScroll();

  const goToSection = (e, target) => {
    e.preventDefault();
    scroll && scroll.scrollTo(`#${target}-section`);
    setSection(target);
  };

  const getCurrentSection = (y) => {
    if (y <= 2400) setSection("about");
    if (y > 2400 && y <= 3360) setSection("menu");
    if (y > 3360 && y <= 5160) setSection("faq");
    if (y > 5160) setSection("contact");
    y <= 150 && setHeight(y);
  };

  if (scroll) {
    scroll.on("scroll", (position) => {
      getCurrentSection(position.scroll.y);
    });
  }

  const handleChange = (e) => {
    setDrawer(e.target.checked);
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      exit={{ y: "-100%" }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className={`${styles.wrapper} ${
        height > 70 && height < 150
          ? styles.wrapperColored
          : styles.wrapperTransparent
      }`}
      id="navbar"
      data-scroll-sticky
    >
      <div className={styles.wrapper2}>
        <img src="Logo.png" alt="gravitea logo" className={styles.logo} />

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
                className={`${section === "faq" && styles.focused}`}
                id="nav-faq"
                href="#faq-section"
                onClick={(e) => goToSection(e, "faq")}
              >
                faq
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
