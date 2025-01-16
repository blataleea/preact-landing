import { h } from "preact";
import styles from "../styles/Team.module.scss";
import photoDemo from '../assets/images/photo_demo.png';

const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <h2 className={styles.team__title}>Команда</h2>
      <section className={styles.team__section}>
        <img
          className={styles.team__section_img}
          src={photoDemo}
          alt="фотография человека"
        />
        <div className={styles.team__section_description}>
          <h3 className={styles.team__section_description_name}>
            Можаев Виктор
          </h3>
          <p className={styles.team__section_description_job}>
            Генеральный директор
          </p>
        </div>
      </section>
      <section className={styles.team__section}>
        <img
          className={styles.team__section_img}
          src={photoDemo}
          alt="фотография человека"
        />
        <div className={styles.team__section_description}>
          <h3 className={styles.team__section_description_name}>Фамилия Имя</h3>
          <p className={styles.team__section_description_job}>Должность</p>
        </div>
      </section>
    </section>
  );
};

export default Team;
