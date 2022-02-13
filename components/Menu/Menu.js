import styles from "./Menu.module.scss";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import { AppContext } from "../../pages";

const marqueeVariants = {
  animate: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Menu = () => {
  const { milkteas, appetizers } = useContext(AppContext);
  const [menu, setMenu] = useState(1);

  return (
    <section
      className={styles.container}
      id="menu-section"
      data-scroll
      data-scroll-section
    >
      <Icon
        className={styles.star}
        icon="emojione-monotone:eight-pointed-star"
      />
      <Icon
        className={styles.star}
        icon="emojione-monotone:eight-pointed-star"
      />
      <Icon
        className={styles.star}
        icon="emojione-monotone:eight-pointed-star"
      />
      <Icon
        className={styles.star}
        icon="emojione-monotone:eight-pointed-star"
      />

      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className={styles.menuTitle}
      >
        <h1>
          MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU -
          MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU -
          MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU -
          MENU - MENU
        </h1>
      </motion.div>

      <div className={styles.wrapper}>
        <a
          className={styles.sale}
          href="https://www.facebook.com/100590172452308/photos/a.126463249865000/127549869756338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="typcn:starburst" />
          <h2>Buy 2 Get 1</h2>
        </a>

        <div className={styles.menuNav}>
          <input type="radio" name="menuOptions" id="option1" defaultChecked />
          <label htmlFor="option1" onClick={() => setMenu(1)}>
            milkteas
          </label>

          <input type="radio" name="menuOptions" id="option2" />
          <label htmlFor="option2" onClick={() => setMenu(0)}>
            appetizers
          </label>
        </div>

        <div className={styles.mainList}>
          {menu ? (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Enjoy our yummy selection of milktea flavors made with{" "}
                <span>
                  <Icon icon="clarity:heart-solid" />
                </span>
              </motion.p>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.text2}
              >
                Simple and tasty staple snacks to complete the fun!
              </motion.p>
            </AnimatePresence>
          )}
          <div className={styles.tableContainer}>
            {!menu ? (
              <AnimatePresence>
                <motion.table
                  className={styles.table}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <thead>
                    <tr>
                      <th> </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appetizers.map((item, index) => (
                      <tr key={index}>
                        <td className={styles.tableName}>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <motion.table
                  className={styles.table}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <thead>
                    <tr>
                      <th> </th>
                      <th>M</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milkteas.map((item, index) => (
                      <tr key={index}>
                        <td className={styles.tableName}>{item.name}</td>
                        <td>P{item.mediumPrice}</td>
                        <td>P{item.largePrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </AnimatePresence>
            )}
          </div>
        </div>

        <div className={styles.promotions}>
          <Icon
            className={styles.promotionsIcon}
            icon="ic:round-delivery-dining"
          />
          <h3>We do deliveries</h3>
          <a
            href="https://www.facebook.com/GraviTea-100590172452308"
            target="_blank"
            rel="noopener noreferrer"
          >
            order yours here
          </a>
          <p>
            For our customers with allergies, please feel free to make special
            requests
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
