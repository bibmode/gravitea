import { AnimatePresence, motion } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { createContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

import styles from "../styles/Home.module.scss";

import MessengerCustomerChat from "react-messenger-customer-chat";
import { client } from "../client";
import Main from "../components/Main/Main";
import Head from "next/head";

export const AppContext = createContext(null);

export default function Home({ promotions, milkteas, appetizers, faqs }) {
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
          faqs,
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
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              name="description"
              content="Gravitea is a milktea shop that offers delicious milktea flavors from different cultures and afternoon snacks that filipinos love. Our menu is sure to be a treat for everyone who wishes to enjoy it in our shop or at home with our fast and convenient delivery service."
            />
            <meta
              name="google-site-verification"
              content="je7G3w3JZzlzAUClfQkSlwITfTGANh8dleejKlPuDws"
            />
            <title>Gravitea: Butuan City&apos;s Favorite Milktea House</title>
          </Head>
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
  const faqs = await client.fetch(`*[_type == "faqs"]`);

  return {
    props: { promotions, milkteas, appetizers, faqs },
  };
}
