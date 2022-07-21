import styles from "../styles/Footer.module.css";
import FooterLogo from "../public/images/footer__logo.svg";
import { footerMenu } from "../assets/db";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            {footerMenu.map((item) => {
              return (
                <li className={styles.menu__item} key={item.id}>
                  <Link href="/req">
                    <a className={styles.menu__link}>{item.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.footer__logo}>
            <Link href="/req">
              <a>
                <FooterLogo />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
