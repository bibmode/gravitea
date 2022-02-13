import { AnimatePresence, motion } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

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
import { Icon } from "@iconify/react";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Drawer from "../components/Drawer/Drawer";
import Faq from "../components/Faq/Faq";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.scss";

import MessengerCustomerChat from "react-messenger-customer-chat";
import { client } from "../client";
import Main from "../components/Main/Main";

export const AppContext = createContext(null);

export default function Home({ promotions, milkteas, appetizers }) {
  const [drawer, setDrawer] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const [height, setHeight] = useState(1);
  const [section, setSection] = useState("about");
  const [loading, setLoading] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    if (drawer) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [drawer]);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

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
          setHeight,
          promotions,
          milkteas,
          appetizers,
          setNavBar,
          containerRef,
        }}
      >
        <AnimatePresence>
          {loading && (
            <motion.div
              className={styles.loader}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.loaderLogo}>
                <Icon icon="typcn:starburst" />
                <img src="./logo-planet.png" alt="logo" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            getDirection: true,
            lerp: 0.03,
            // ... all available Locomotive Scroll instance options
          }}
          watch={[navBar, section, drawer]}
          containerRef={containerRef}
        >
          <Main />
        </LocomotiveScrollProvider>
        <MessengerCustomerChat
          pageId={process.env.NEXT_PUBLIC_FB_PAGE_ID}
          appId={process.env.NEXT_PUBLIC_FB_APP_ID}
        />
      </AppContext.Provider>
    </>
  );
}

export async function getStaticProps(context) {
  const promotions = await client.fetch(
    `*[_type == "promos"] | order(_createdAt asc) [0..3]`
  );
  const milkteas = await client.fetch(`*[_type == "milkteas"]`);
  const appetizers = await client.fetch(`*[_type == "appetizers"]`);

  return {
    props: { promotions, milkteas, appetizers },
  };
}
