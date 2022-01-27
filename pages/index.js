import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <Header />
        <About />
        <Menu />
        <Contact />
        <footer>
          <p>All rights reserved to Gravitea created with care by G. Navales</p>
        </footer>
      </div>
    </div>
  );
}
