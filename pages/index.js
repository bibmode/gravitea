import { AnimatePresence, motion } from "framer-motion";

import Head from "next/head";
import Image from "next/image";
import {
  createContext,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.scss";

export const AppContext = createContext(null);

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const [height, setHeight] = useState(0);
  const [section, setSection] = useState("about");
  let { scroll } = useLocomotiveScroll();

  const options = ["about", "menu", "contact"];

  const goToSection = (e, target) => {
    e.preventDefault();
    scroll && scroll.scrollTo(`#${target}-section`);
  };

  const getCurrentSection = (sections, direction) => {
    const currentId =
      direction == "up" || sections.length < 2
        ? sections[0]?.id
        : sections[1]?.id;

    switch (currentId) {
      case "el1":
        setSection("about");
        break;
      case "el2":
        setSection("menu");
        break;
      case "el3":
        setSection("contact");
        break;
      default:
        setSection("about");
        break;
    }
  };

  useEffect(() => {
    if (scroll && !drawer) {
      scroll.on("scroll", (position) => {
        const elementsInView = Object.values(position.currentElements);
        getCurrentSection(elementsInView, position.direction);

        position.direction === "down" && setNavBar(false);
        position.direction === "up" && setNavBar(true);

        setHeight(position.scroll.y);
      });
    }
  }, [scroll]);

  useEffect(() => {
    if (drawer) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [drawer]);

  return (
    <>
      <AppContext.Provider
        value={{
          drawer,
          setDrawer,
          navBar,
          height,
          section,
          setSection,
          goToSection,
        }}
      >
        <AnimatePresence>{navBar && <NavBar />}</AnimatePresence>
        <AnimatePresence>{drawer && <Drawer />}</AnimatePresence>
        <AnimatePresence>
          {" "}
          {drawer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className={styles.overlay}
            />
          )}
        </AnimatePresence>
        <div data-scroll-section>
          <div className={styles.main}>
            <Header />
            <About />
            <Menu />
            <Contact />
            <footer>
              <p>
                All rights reserved to Gravitea created with care by G. Navales
              </p>
            </footer>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}
