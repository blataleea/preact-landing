import { h } from 'preact';
import styles from '../styles/Contacts.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-map';

const Contacts = () => {

  const mapState = {
    center: [55.744475, 37.707619],
    zoom: 16,
  };



  return (
    <section id="contacts" className={styles.contacts}>
      <article className={styles.contacts__section}>
        <h2 className={styles.contacts__title}>Контакты</h2>
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
          </div>
          {/* место для яндекс карт */}
          <YMaps  query={{apikey: '27170493-9c31-493f-8e84-18092df6062f'}}>
            <Map
            className={styles.contacts__map}
            defaultState={mapState}
            >
              <Placemark
              geometry={[55.744475, 37.707619]}
              properties={{
                hintContent: 'Наш офис',
                balloonContent: 'г. Москва, ул. Душинская, д. 7, стр. 3, офис 11'
              }}
              />
            </Map>
          </YMaps>
      </article>
    </section>
  );
}

export default Contacts;
