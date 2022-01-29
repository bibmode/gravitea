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
      {/* <div className={styles.nav}>
        <img src="Logo.png" alt="gravitea logo" className={styles.logo} />
        <button className={styles.close} onClick={() => setDrawer(false)}>
          <Icon className={styles.closeIcon} icon="octicon:x-16" />
        </button>
      </div> */}

      <div className={styles.social}>
        <button className={styles.socialButton}>
          <Icon icon="brandico:facebook" />
        </button>
        <button className={styles.socialButton}>
          <Icon icon="akar-icons:instagram-fill" />
        </button>
      </div>

      <div className={styles.navLinks}>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">contact</a>
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
