import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { AppContext } from "../../pages";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Drawer from "../Drawer/Drawer";
import Faq from "../Faq/Faq";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import styles from "./Main.module.scss";

const Main = () => {
  const { containerRef, navBar, drawer, setSection, setNavBar, setHeight } =
    useContext(AppContext);

  let { scroll } = useLocomotiveScroll();

  if (scroll && !drawer) {
    scroll.on("scroll", (position) => {
      position.direction === "down" && setNavBar(false);
      position.direction === "up" && setNavBar(true);
    });
  }

  return (
    <div data-scroll-container ref={containerRef} className={styles.main}>
      <AnimatePresence>{navBar && <NavBar />}</AnimatePresence>
      <AnimatePresence>{drawer && <Drawer />}</AnimatePresence>
      <Header />
      <About />
      <Menu />
      <Faq />
      <Contact />
    </div>
  );
};

export default Main;
