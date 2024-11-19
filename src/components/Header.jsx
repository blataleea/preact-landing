import { h } from "preact";
import styles from "../styles/Header.module.scss";
import {useEffect, useState} from 'preact/hooks';

const Header = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  };

  return (
    <header className={styles.header}>
      <container className={styles.header__container}>
        <div className={styles.header__background}></div>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>
            Hard <br />
            Facility <br />
            Manager
          </h1>
          <div className={styles.header__logo}>
            <img
              src="/path-to-your-logo.png"
              alt="Логотип компании"
              className={styles.header__logo_img}
            />
          </div>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              <li className={styles.header__nav_item}>
                <button
                  className={styles.link}
                  onClick={() => scrollToSection('about')}
                >
                  О нас
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={styles.link}
                  onClick={() => scrollToSection('team')}
                >
                  Команда
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={styles.link}
                  onClick={() => scrollToSection('projects')}
                >
                  Проекты
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={styles.link}
                  onClick={() => scrollToSection('contacts')}
                >
                  Контакты
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </container>

      {/* Вторая фиксированная навигация */}
      <nav className={styles.fixedNav}>
        <ul className={styles.fixedNav__list}>
          <li className={styles.fixedNav__item}>
            <button
              className={styles.link}
              onClick={() => scrollToSection('about')}
            >
              О нас
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={styles.link}
              onClick={() => scrollToSection('team')}
            >
              Команда
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={styles.link}
              onClick={() => scrollToSection('projects')}
            >
              Проекты
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={styles.link}
              onClick={() => scrollToSection('contacts')}
            >
              Контакты
            </button>
          </li>
        </ul>
      </nav>


    </header>
  );
};

export default Header;