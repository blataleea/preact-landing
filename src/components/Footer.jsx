import {h} from 'preact';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <span className={styles.footer__company_name}>ООО «ХАРД ФМ»</span>
        </div>
        <div className={styles.footer__copyrighting}>
          ООО ХАРД ФМ. ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </div>
        <div className={styles.footer__contacts}>
          <p>Email: info_hfm@mail.ru</p>
          <p>Tel: +7 (925)-275-2555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;