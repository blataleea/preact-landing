import { h } from "preact";
import styles from "../styles/Header.module.scss";
import { useEffect, useState } from 'preact/hooks';
import logoFill from '../../public/logofill_header.svg';

const Header = () => {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['about', 'team', 'projects', 'contacts'];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sectionElements.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    
    return () => {
      sectionElements.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__background}></div>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>
            Hard Facility Manager
          </h1>
          <div className={styles.header__logo}>
            <img
              src={logoFill}
              alt="Логотип компании"
              className={styles.header__logo_img}
            />
          </div>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              <li className={styles.header__nav_item}>
                <button
                  className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}
                  onClick={() => scrollToSection('about')}
                >
                  О нас
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={`${styles.link} ${activeSection === 'team' ? styles.active : ''}`}
                  onClick={() => scrollToSection('team')}
                >
                  Команда
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
                  onClick={() => scrollToSection('projects')}
                >
                  Проекты
                </button>
              </li>
              <li className={styles.header__nav_item}>
                <button
                  className={`${styles.link} ${activeSection === 'contacts' ? styles.active : ''}`}
                  onClick={() => scrollToSection('contacts')}
                >
                  Контакты
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      
      <nav className={styles.fixedNav}>
        <ul className={styles.fixedNav__list}>
          <li className={styles.fixedNav__item}>
            <button
              className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={() => scrollToSection('about')}
            >
              О нас
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={`${styles.link} ${activeSection === 'team' ? styles.active : ''}`}
              onClick={() => scrollToSection('team')}
            >
              Команда
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Проекты
            </button>
          </li>
          <li className={styles.fixedNav__item}>
            <button
              className={`${styles.link} ${activeSection === 'contacts' ? styles.active : ''}`}
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
