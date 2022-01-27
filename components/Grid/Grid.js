import { useEffect, useState } from "react";
import styles from "./Grid.module.scss";
import { motion } from "framer-motion";

const Grid = () => {
  const [horizontalLines, setHorizontalLines] = useState(null);
  const [verticalLines, setVerticalLines] = useState(null);

  useEffect(() => {
    setHorizontalLines(Math.round(innerHeight / 65));
    setVerticalLines(Math.round(innerWidth / 65));
  }, []);

  useEffect(() => {
    console.log(verticalLines, horizontalLines);
    setVerticalLines(Math.round(innerWidth / 65));
  }, [verticalLines, horizontalLines]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const vertical = {
    hidden: {
      y: "-100%",
    },
    visible: {
      y: 0,
      transition: { duration: 2 },
    },
  };

  const horizontal = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className={styles.wrapper}>
      {horizontalLines && verticalLines && (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ originX: 0.5 }}
            className={styles.vertical}
          >
            {[...Array(verticalLines)].map((line, index) => (
              <motion.div
                variants={vertical}
                className={styles.verticalLine}
                key={index}
              />
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={styles.horizontal}
          >
            {[...Array(horizontalLines - 1)].map((line, index) => (
              <motion.div
                variants={horizontal}
                className={styles.horizontalLine}
                key={index}
              />
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Grid;
