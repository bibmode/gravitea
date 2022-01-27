import { Icon } from "@iconify/react";
import styles from "./Contact.module.scss";
import dynamic from "next/dynamic";

const Contact = () => {
  const MapWithNoSSR = dynamic(() => import("../Map/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <h1>contact</h1>
      <h2>
        Ampayon Regatta East Village Block 16 Lot 8 8600 Butuan City,
        Philippines
      </h2>

      <div className={styles.schedule}>
        <h4>mon-fri</h4>
        <h4>9:00-20:00</h4>
      </div>

      <div className={styles.contactLines}>
        <h3>+63 939 388 1120</h3>
        <h3>gravitea_official@gmail.com</h3>
        <div className={styles.social}>
          <Icon icon="brandico:facebook" />
          <Icon icon="cib:instagram" />
        </div>
      </div>

      <div className={styles.map}>
        <MapWithNoSSR />
      </div>

      <h5>© 2022</h5>
    </div>
  );
};

export default Contact;
