import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Buttons.module.css";
import { Modal } from "./Modal";

export const Buttons = ({ isModalVisible, setIsModalVisible }) => {
  const [scrollIsActive, setScrollIsActive] = useState(true);

  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };

  const enableScrolling = () => {
    window.onscroll = () => {};
  };

  const toggleScrolling = () => {
    scrollIsActive ? disableScrolling() : enableScrolling();
    setScrollIsActive(!scrollIsActive);
  };

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        toggleScrolling={toggleScrolling}
      />
      <Link href="">
        <a
          className={styles.outline__btn}
          onClick={() => toggleScrolling() & setIsModalVisible(!isModalVisible)}
        >
          Войти в аккаунт
        </a>
      </Link>
      <Link href="/req">
        <a className={styles.primary__btn}>Скачать клиент</a>
      </Link>
      <Link href="/req">
        <a className={styles.secondary__btn}>Оформить подписку</a>
      </Link>
    </>
  );
};
