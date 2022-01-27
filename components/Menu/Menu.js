import styles from "./Menu.module.scss";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <div className={styles.container}>
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
            <td>mango cheesecake</td>
            <td>P79</td>
            <td>P85</td>
          </tr>
        </table>
      </div>

      <div className={styles.promotions}>
        <h3>We do deliveries</h3>
        <a href="#">order yours here</a>
        <p>
          For our customers with allergies, please feel free to make special
          requests
        </p>
      </div>
    </div>
  );
};

export default Menu;
