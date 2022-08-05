import styles from "../styles/Header.module.css";
import Logo from "../public/images/logo.svg";
import Search from "../public/images/search.svg";
import Link from "next/link";
import { headerIconsRight } from "../assets";
import { Buttons } from ".";
import { useState } from "react";
import { userAtom } from ".";
import { useAtomValue } from "jotai";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userName = useAtomValue(userAtom);
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
              {userName ? (
                <div className={styles.authorized__user}>
                  Welcome, {userName}!
                </div>
              ) : (
                <div className={styles.authorized__user}>Guest</div>
              )}
              <Link href="/zero">
                <a>
                  <Search />
                </a>
              </Link>
            </div>
            <div className={styles.header__buttons}>
              <Buttons
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
            <div className={styles.header__icons_right}>
              {headerIconsRight.map((item) => {
                return (
                  <Link href="/" key={item.id}>
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
