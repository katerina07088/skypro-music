
import Image from "next/image";
import styles from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          className={styles.logoImage}
          src="/img/logo.png"
          alt="logo"
          width={250}
          height={170}
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={styles.navMenu}>
    <ul className={styles.menuList}>
        <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className={styles.menuLink}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
