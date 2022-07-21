import Link from "next/link";
import styles from "../styles/Buttons.module.css";

const Buttons = () => {
  return (
    <>
      <Link href="/req">
        <a className={styles.outline__btn}>Войти в аккаунт</a>
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

export default Buttons;
