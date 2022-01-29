import Head from "next/head";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(drawer);
  }, [drawer]);

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    if (drawer) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.position = "static";
    }
  }, [drawer]);

  useEffect(() => {
    if (!drawer) {
      window.pageYOffset > 50 && setNavBar(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    }
  }, [currentScrollPos]);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppContext.Provider
      value={{
        drawer,
        setDrawer,
        currentScrollPos,
      }}
    >
      <div>
        <div className={styles.main}>
          {navBar && <NavBar />}
          {drawer && <Drawer />}
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
