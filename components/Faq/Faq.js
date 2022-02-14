import styles from "./Faq.module.scss";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AppContext } from "../../pages";
import { urlFor } from "../../client";

const Faq = () => {
  const { promotions, faqs } = useContext(AppContext);

  return (
    <section
      className={styles.container}
      id="faq-section"
      data-scroll
      data-scroll-section
    >
      <div className={styles.wrapper}>
        <div
          className={`${styles.blobPurple1} ${styles.blob}`}
          data-scroll
          data-scroll-speed="-2"
        >
          <div className={styles.blobPurple1Diamond}>
            <img src="diamond.svg" alt="diamond" />
            <img src="diamond.svg" alt="diamond" />
          </div>
        </div>
        <div
          className={`${styles.blobPurple2} ${styles.blob}`}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          data-scroll-class="appear"
          data-scroll-repeat="true"
        >
          <div className={styles.blobPurple2Diamond}>
            <img src="diamond.svg" alt="diamond" />
            <img src="diamond.svg" alt="diamond" />
          </div>
        </div>
        <div
          className={`${styles.blobGreen2} ${styles.blob}`}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          data-scroll-class="appear"
          data-scroll-repeat="true"
        >
          <div className={styles.blobGreen2Diamond}>
            <img src="diamond.svg" alt="diamond" />
            <img src="diamond.svg" alt="diamond" />
          </div>
        </div>

        {/* FAQs main */}
        <div className={styles.faq}>
          <div className={styles.faqWords}>
            <h2 data-scroll data-scroll-speed="2">
              FAQ
            </h2>
            <p data-scroll data-scroll-speed="-1">
              Transparency is key to trust, and we are proud to share everything
              we are doing to make your next milktea experience safer and
              yummier!
            </p>
            <div className={`${styles.blobGreen} ${styles.blob}`} />
          </div>

          <div className={styles.main} data-scroll data-scroll-speed="2">
            {faqs?.map((item, index) => (
              <div className={styles.mainItem} key={index}>
                <h3>{item.question}</h3>
                <input
                  type="checkbox"
                  name={`faq-item-${index}`}
                  id={`faq-item-${index}`}
                />
                <label htmlFor={`faq-item-${index}`}>
                  <Icon icon="akar-icons:cross" />
                </label>
                <div className={styles.mainItemAnswer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* promotions */}
        <div className={styles.promotions}>
          <div
            className={styles.promotionsHeader}
            data-scroll
            data-scroll-speed="2"
          >
            <Icon icon="emojione:star" />
            <p>Life is better with milktea.</p>
          </div>

          <div className={styles.promotionsPhotos}>
            {promotions.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img src={urlFor(item.poster).url()} alt="promotion" />
                <Icon className={styles.pointer} icon="ci:external-link" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
