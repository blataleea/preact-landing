import { h } from 'preact';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <h2 className={styles.about__title}>Добро пожаловать в Hard FM</h2>
      <p className={styles.about__intro}>
        Hard Facility Management — это управление недвижимостью, инженерной
        инфраструктурой, техническое обслуживание инженерного оборудования и
        систем, а также строительно-монтажные работы, подготовка торговых
        площадей, проектирование. Монтаж и ремонт систем жизнеобеспечения
        зданий, обеспечение пожарной безопасности, выполнение общестроительных и
        отделочных работ.
      </p>
      <div className={styles.about__content}>
        <div className={styles.about__section}>
          <h3 className={styles.about__section__title}>Наша миссия</h3>
          <p className={styles.about__section__text}>
            Избежать незапланированных поломок, простоев и поддерживать высокий
            уровень обслуживания. Управление услугами по техническому обслуживанию
            зданий.
          </p>
        </div>
        <div className={styles.about__section}>
          <h3 className={styles.about__section__title}>Мы работаем</h3>
          <p className={styles.about__section__text}>
            На объектах социально-культурного назначения, торгово-развлекательных
            центрах, офисных зданиях и помещениях. Выполняем оценку качества/экспертизу
            смр, общестроительных работ и инженерных систем, экспертизу и выявление
            причин возникновения тех или иных последствий, оценка причиненного ущерба,
            определение стоимости работ и затрат. Проводим рекламационные процедуры.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
