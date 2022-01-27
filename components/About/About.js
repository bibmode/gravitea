import Image from "next/image";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      {/* blobs */}
      <div className={`${styles.blobGreen} ${styles.blob}`}>
        <div className={styles.blobGreenDiamond}>
          <img src="diamond.svg" alt="diamond" />
          <img src="diamond.svg" alt="diamond" />
        </div>
      </div>
      <div
        className={`${styles.blobPurple} ${styles.blobPurple1} ${styles.blob}`}
      >
        <div className={styles.blobPurpleDiamond}>
          <img src="diamond.svg" alt="diamond" />
          <img src="diamond.svg" alt="diamond" />
        </div>
      </div>
      <div
        className={`${styles.blobPurple} ${styles.blobPurple2} ${styles.blob}`}
      >
        <img src="whiteGrid.svg" alt="white grid" />
      </div>

      <div className={styles.milkshake}>
        <img src="milkshake-table.jpg" alt="milkshake on table" />
        <h2>Where your cravings attracts satisfaction</h2>
        <p>
          <b>GraviTea</b>
          {` brings out the unique vibe of milktea; a customizable menu of
          drinks that surely attracts the customer's cravings. Along with its
          sweetness and its taste, GraviTea also offers different flavors that
          match customers' satisfaction. We also conforms to the patterns or
          trends which makes it change from time to time yet the uniqueness of
          this taste is still the same.`}
        </p>
      </div>

      <div className={styles.fruits}>
        <img src="fruits.jpg" alt="fruits" />

        <p>
          All of our teas are made with good quality powders, sweet toppings,
          and with real fruits that catch the eyes and attract the taste of the
          customers.{" "}
        </p>
      </div>

      <div className={styles.facts}>
        <div className={styles.factsItem}>
          <img src="/green-milkshake.png" alt="green milkshake" />
          <h3>DELIVERS 45 MIN TO 1 HOUR</h3>
          <p>{`We practice no contact delivery for our customer's safety`}</p>
        </div>
        <div className={styles.factsItem}>
          <img src="/orange-milkshake.png" alt="orange milkshake" />
          <h3>WE DELIVER ACROSS BUTUAN CITY</h3>
          <p>{`Standard Shipment Rates Apply`}</p>
        </div>
        <div className={styles.factsItem}>
          <img src="/purple-milkshake.png" alt="purple milkshake" />
          <h3>WE ACCEPT MANY MODES OF PAYMENT</h3>
          <p>{`Cash on delivery | Gcash | Over the counter`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
