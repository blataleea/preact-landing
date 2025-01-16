import { h } from "preact";
import styles from "../styles/Documents.module.scss";
import page_1 from "../assets/images/page_1.jpg";
import page_2 from "../assets/images/page_2.jpg";
import page_3 from "../assets/images/page_3.jpg";
import page_4 from "../assets/images/page_4.jpg";

const Documents = () => {
  return (
    <section id="documents" className={styles.documents}>
      <section className={styles.documents__section}>
        <h2 className={styles.documents__section__title}>Документы</h2>
        <div className={styles.documents__section__content}>
          <div className={styles.documents__section__content__images}>
            <img
              className={styles.documents__section__content__images_img}
              src={page_1}
              alt="документ"
            />
            <img
              className={styles.documents__section__content__images_img}
              src={page_2}
              alt="документ"
            />
            <img
              className={styles.documents__section__content__images_img}
              src={page_3}
              alt="документ"
            />
            <img
              className={styles.documents__section__content__images_img}
              src={page_4}
              alt="документ"
            />
          </div>
          <p className={styles.documents__section__content__description}>
          <span className={styles.documents__section__content__description__span}>ООО Хард ФМ </span>является членом <span className={styles.documents__section__content__description__span}>саморегулируемой организации</span> Союз
            Строителей в г. Москве, что подтверждает - деятельность компании в
            части управления и обслуживания недвижимости, - предоставление
            компанией широкого спектра услуг <span className={styles.documents__section__content__description__span}>в области строительства,
            реконструкции, капитального ремонта</span> - наличие компетентной команды,
            специалисты которой включены в Национальный реестр специалистов 
            <span className={styles.documents__section__content__description__span}> Нострой</span>.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Documents;
