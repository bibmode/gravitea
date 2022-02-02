import styles from "./Menu.module.scss";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <section className={styles.container} id="menu-section">
      <div className={styles.menuTitle}>
        <h1>MENU - MENU - MENU - MENU</h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.menuNav}>
          <a href="#">milkteas</a>
          <a href="#">appetizers</a>
        </div>

        <div className={styles.mainList}>
          <p>
            Enjoy our yummy selection of milktea flavors made with{" "}
            <span>
              <Icon icon="clarity:heart-solid" />
            </span>{" "}
          </p>
          <table className={styles.table}>
            <tr>
              <th> </th>
              <th>M</th>
              <th>L</th>
            </tr>
            <tr>
              <td className={styles.tableName}>mango cheesecake</td>
              <td>P79</td>
              <td>P85</td>
            </tr>
          </table>
        </div>

        <div className={styles.promotions}>
          <Icon
            className={styles.promotionsIcon}
            icon="ic:round-delivery-dining"
          />
          <h3>We do deliveries</h3>
          <a href="#">order yours here</a>
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
