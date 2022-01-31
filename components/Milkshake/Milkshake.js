import styles from "./Milkshake.module.scss";

const Milkshake = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.front}>
          <img src="./cup/cup-front.svg" alt="front of cup" />
        </div>
        <div className={styles.top}>
          <img src="./cup/cup-top.svg" alt="top of cup" />
        </div>
        <div className={styles.back}>
          <img src="./cup/cup-back.svg" alt="back of cup" />
        </div>
      </div>
    </div>
  );
};

export default Milkshake;
