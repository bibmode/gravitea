import { motion } from "framer-motion";
import Grid from "../Grid/Grid";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import Ellipse from "../../public/ellipseStar.svg";
import { Icon } from "@iconify/react";
import Particles from "react-tsparticles";

const Header = () => {
  const transition = { duration: 4, ease: "easeInOut" };
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className={styles.wrapper}>
      <Grid />

      <div className={styles.container}>
        <Icon className={styles.starIcon} icon="emojione:star" />
        <Icon className={styles.starIcon} icon="emojione:star" />
        <Icon className={styles.starIcon} icon="emojione:star" />

        <div className={styles.title} id="tsparticles">
          <h1>Gravitea</h1>
          <Ellipse className={styles.titleEllipse} />
          <div
            // animate={{
            //   scale: [1, 0.8],
            // }}
            // transition={{
            //   yoyo: Infinity,
            //   duration: 2,
            //   ease: "easeInOut",
            // }}
            className={styles.titleBlob}
          />
          {/* <Particles
            className={styles.titleParticles}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                color: {
                  value: "#ffffff",
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "star",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          /> */}
          <div className={styles.titleStars} />
        </div>

        <div className={styles.downBtn}>
          <button className={styles.downBtnButton}>
            <Icon className={styles.downBtnIcon} icon="icon-park:arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
