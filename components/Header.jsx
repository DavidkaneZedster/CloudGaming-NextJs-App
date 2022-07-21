import styles from "../styles/Header.module.css";
import Logo from "../public/images/logo.svg";
import Search from "../public/images/search.svg";
import Link from "next/link";
import { headerIconsRight } from "../assets/db";
import HeaderButtons from "./Buttons.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__block}>
          <div className={styles.header__block_logo}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={styles.header__block_menu}>
            <div className={styles.header__icons_left}>
              <Link href="/zero">
                <a>
                  <Search />
                </a>
              </Link>
            </div>
            <div className={styles.header__buttons}>
              <HeaderButtons />
            </div>
            <div className={styles.header__icons_right}>
              {headerIconsRight.map((item) => {
                return (
                  <Link href="/req" key={item.id}>
                    <a>{item.icon}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
