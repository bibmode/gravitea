import { motion } from "framer-motion";
import Grid from "../Grid/Grid";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import { Icon } from "@iconify/react";
import Particles from "react-tsparticles";
import Milkshake from "../Milkshake/Milkshake";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import dynamic from "next/dynamic";

const Ellipse = dynamic(() => import("../../public/ellipseStar.svg"), {
  ssr: false,
});

const Header = () => {
  let { scroll } = useLocomotiveScroll();

  const goToAbout = (e) => {
    e.preventDefault();
    scroll && scroll.scrollTo("#about-section");
  };

  return (
    <section className={styles.wrapper} data-scroll data-scroll-section>
      <Grid />

      <div className={styles.container}>
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/GraviTea-100590172452308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="brandico:facebook" />
          </a>
          <a href="#">
            <Icon icon="akar-icons:instagram-fill" />
          </a>
        </div>
        <div className={styles.container2}>
          <Icon className={styles.starIcon} icon="emojione:star" />
          <Icon className={styles.starIcon} icon="emojione:star" />
          <Icon className={styles.starIcon} icon="emojione:star" />

          <div className={styles.title1} id="tsparticles">
            <h1>Gravitea</h1>
            <Ellipse className={styles.title1Ellipse} />
            <div className={styles.title1Blob} />
            <div className={styles.title1Stars} />
          </div>

          <div
            className={styles.milkshake}
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <Milkshake />
            <div className={styles.milkshakeBlob}>
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars1}`}
              />
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars1}`}
              />
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars2}`}
              />
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars2}`}
              />
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars3}`}
              />
              <div
                className={`${styles.milkshakeStars} ${styles.milkshakeStars3}`}
              />
            </div>
          </div>

          <div className={styles.title2}>
            <h1
              data-scroll
              data-scroll-speed="-0.8"
              data-scroll-direction="horizontal"
            >
              gravitea
            </h1>

            <div
              className={styles.title2Items}
              data-scroll
              data-scroll-speed="-0.8"
              data-scroll-direction="horizontal"
            >
              <p>Milkteas and</p>
              <p>Snacks</p>
            </div>

            <p
              className={styles.title2Details}
              data-scroll
              data-scroll-speed="-0.8"
              data-scroll-direction="horizontal"
            >
              <b>Gravitea</b> is a milktea shop that offers delicious milktea
              flavors from different cultures and afternoon snacks that{" "}
              <b>filipinos love.</b> Our menu is sure to be a treat for everyone
              who wishes to enjoy it in our shop or at home with our{" "}
              <b>fast and convenient delivery service.</b>{" "}
            </p>
          </div>

          <div className={styles.hours}>
            <h3
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="0.8"
            >
              opens 9:00-20:00
            </h3>
            <h4
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="0.8"
            >
              © 2022
            </h4>
          </div>

          <div className={styles.downBtn}>
            <button className={styles.downBtnButton} onClick={goToAbout}>
              <Icon
                className={styles.downBtnIcon}
                icon="icon-park:arrow-down"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
