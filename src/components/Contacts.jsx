import { h } from 'preact';
import styles from '../styles/Contacts.module.scss';

const Contacts = () => {
  return (
    <div id="contacts" className={styles.contacts}>
      <section className={styles.section}>
        <h2 className={styles.contacts__title}>Контакты</h2>
        <p className={styles.contacts__description}>
          Мы всегда рады ответить на ваши вопросы.
        </p>
        <div className={styles.contacts__container}>
          <div className={styles.contacts__details}>
            <p className={styles.contacts__info}>
              <span className={styles.contacts__name}>Можаев Виктор</span>
              Должность: Генеральный директор
              <a href="tel:+79252752555" className={styles.contacts__phone}>Телефон: +7 (925) 275-2555</a>
              <a 
                href="https://yandex.ru/maps/?text=г. Москва, ул. Душинская, д. 7, стр. 3, офис 11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contacts__address}
              >
                Адрес: г. Москва, ул. Душинская, д. 7, стр. 3, офис 11
              </a>
            </p>
            
          </div>
          <img src="src\assets\images\map.jpg" loading='lazy' className={styles.img}/>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
