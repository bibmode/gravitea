import { Icon } from "@iconify/react";
import styles from "./Contact.module.scss";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Contact = () => {
  const MapWithNoSSR = dynamic(() => import("../Map/Map"), {
    ssr: false,
  });

  return (
    <section
      className={styles.container}
      id="contact-section"
      data-scroll
      data-scroll-section
    >
      <div className={styles.container2}>
        <h1 data-scroll data-scroll-speed="1">
          contact
        </h1>
        <h2 data-scroll data-scroll-speed="2" data-scroll-sticky>
          Ampayon Regatta East Village Block 16 Lot 8 8600 Butuan City,
          Philippines
        </h2>

        <div className={styles.schedule} data-scroll data-scroll-speed="1">
          <h4>mon-fri</h4>
          <h4>9:00-20:00</h4>
        </div>

        <div className={styles.contactLines} data-scroll data-scroll-speed="1">
          <div>
            <h3>+63 939 388 1120</h3>
            <h3>gravitea_official@gmail.com</h3>
          </div>

          <div className={styles.social}>
            <a
              href="https://www.facebook.com/GraviTea-100590172452308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="brandico:facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon className={styles.socialInstagram} icon="cib:instagram" />
            </a>
          </div>
        </div>

        <div
          className={styles.map}
          data-scroll
          data-scroll-speed="-1"
          data-scroll-sticky
        >
          <MapWithNoSSR />
        </div>

        <h5>© 2022</h5>
      </div>
      <footer>
        <p>
          All rights reserved to Gravitea | Site by{" "}
          <a href="https://github.com/bibmode" target="_blank" rel="noreferrer">
            <u> bibmode</u>
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
