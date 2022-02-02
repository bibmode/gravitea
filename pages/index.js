import { AnimatePresence, motion } from "framer-motion";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentScrollPos, setCurrentScrollPos] = useState(null);

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    if (drawer) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [drawer]);

  useEffect(() => {
    if (!drawer) {
      window.pageYOffset > 50 && setNavBar(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    }

    console.log(currentScrollPos, prevScrollPos);
  }, [currentScrollPos]);

  // useEffect(() => {
  //   setPrevScrollPos(window.pageYOffset);
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <AppContext.Provider
      value={{
        drawer,
        setDrawer,
        currentScrollPos,
      }}
    >
      <div data-scroll-section>
        <div className={styles.main}>
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
  );
}
