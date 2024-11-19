import {h} from 'preact';
import styles from '../styles/Team.module.scss';

const Team = () => {
  return (
    <container id="team" className={styles.team}>
      <h2 className={styles.team__title}>
        Команда
      </h2>
      <section className={styles.team__section}>
        <img className={styles.team__section_img} src='https://jf-staeulalia.pt/img/other/85/collection-laptop-computers-pictures-12.png' alt='фотография человека'/>
        <h3 className={styles.team__section_description}>
          Можаев Виктор
          <br/>
          Генеральный директор
        </h3>
      </section>
      <section className={styles.team__section}>
        <img className={styles.team__section_img} src='https://jf-staeulalia.pt/img/other/85/collection-laptop-computers-pictures-12.png' alt='фотография человека'/>
        <h3 className={styles.team__section_description}>
          Имя
          <br/>
          Должность
        </h3>
      </section>
    </container>
  );
};

export default Team;