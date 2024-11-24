import {h} from 'preact';
import styles from '../styles/Team.module.scss';

const Team = () => {
  return (
    <container id="team" className={styles.team}>
      <h2 className={styles.team__title}>
        Команда
      </h2>
      <section className={styles.team__section}>
        <img className={styles.team__section_img} src='src\assets\images\photo_demo.png'/>
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
        <img className={styles.team__section_img} src='src\assets\images\photo_demo.png' alt='фотография человека'/>
        <div className={styles.team__section_description}>
        <h3 className={styles.team__section_description_name}>
          Фамилия Имя
          </h3>
        <p className={styles.team__section_description_job}>
          Должность
        </p>
        </div>
      </section>
    </container>
  );
};

export default Team;