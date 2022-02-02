import { motion } from "framer-motion";
import Grid from "../Grid/Grid";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import Ellipse from "../../public/ellipseStar.svg";
import { Icon } from "@iconify/react";
import Particles from "react-tsparticles";
import Milkshake from "../Milkshake/Milkshake";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Header = () => {
  const transition = { duration: 4, ease: "easeInOut" };
  let { scroll } = useLocomotiveScroll();

  const goToAbout = (e) => {
    e.preventDefault();
    scroll && scroll.scrollTo("#about-section");
  };

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section className={styles.wrapper}>
      <Grid />

      <div className={styles.container}>
        <div className={styles.social}>
          <a href="#">
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

          <div className={styles.milkshake}>
            <Milkshake />
            <div className={styles.milkshakeBlob}></div>
          </div>

          <div className={styles.title2}>
            <h1>gravitea</h1>

            <div className={styles.title2Items}>
              <p>Milkteas and</p>
              <p>Snacks</p>
            </div>

            <p className={styles.title2Details}>
              <b>Gravitea</b> is a milktea shop that offers delicious milktea
              flavors from different cultures and afternoon snacks that{" "}
              <b>filipinos love.</b> Our menu is sure to be a treat for everyone
              who wishes to enjoy it in our shop or at home with our{" "}
              <b>fast and convenient delivery service.</b>{" "}
            </p>
          </div>

          <div className={styles.hours}>
            <h3>opens 9:00-20:00</h3>
            <h4>© 2022</h4>
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
