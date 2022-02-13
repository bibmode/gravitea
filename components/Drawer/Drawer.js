import styles from "./Drawer.module.scss";

import { AppContext } from "../../pages";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Drawer = () => {
  const { setDrawer } = useContext(AppContext);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={styles.container}
    >
      <div className={styles.social}>
        <button className={styles.socialButton}>
          <Icon icon="brandico:facebook" />
        </button>
        <button className={styles.socialButton}>
          <Icon icon="akar-icons:instagram-fill" />
        </button>
      </div>

      <div className={styles.navLinks}>
        <a href="#about-section" onClick={() => setDrawer(false)}>
          about
        </a>
        <a href="#menu-section" onClick={() => setDrawer(false)}>
          menu
        </a>
        <a href="#faq-section" onClick={() => setDrawer(false)}>
          faq
        </a>
        <a href="#contact-section" onClick={() => setDrawer(false)}>
          contact
        </a>
      </div>

      <h2>
        Ampayon Regatta East Village Block 16 Lot 8 8600 Butuan City,
        Philippines
      </h2>
      <h2>MON-FRI 9:00-20:00</h2>
      <h3>+63 939 388 1120</h3>
      <h3>gravitea_official@gmail.com</h3>
    </motion.div>
  );
};

export default Drawer;
