import { motion } from "framer-motion";
import Grid from "../Grid/Grid";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import Ellipse from "../../public/ellipseStar.svg";
import { Icon } from "@iconify/react";

const Header = () => {
  const transition = { duration: 4, ease: "easeInOut" };

  return (
    <div className={styles.wrapper}>
      <Grid />

      <div className={styles.container}>
        <div className={styles.nav}>
          <NavBar />
        </div>

        <div className={styles.title}>
          <h1>Gravitea</h1>
          <Ellipse className={styles.titleEllipse} />
          <motion.div
            animate={{
              scale: [1, 0.8],
            }}
            transition={{
              yoyo: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className={styles.titleBlob}
          />
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
