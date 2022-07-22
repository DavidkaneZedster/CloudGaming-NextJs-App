import Link from "next/link";
import styles from "../styles/Previev.module.css";

export const Preview = () => {
  return (
    <section className={styles.preview}>
      <div className="container">
        <h1 className={styles.preview__heading_text}>
          Игровое железо больше{" "}
          <span className={styles.preview__span}>не нужно</span>
        </h1>
        <h2 className={styles.preview__subscription}>
          Нужен только хороший интернет
        </h2>
        <p className={styles.preview__after_text}>
          Играй в любимые видео-игры из любой точки мира на любом устройстве
        </p>
        <Link href="/">
          <a className={styles.secondary__btn}>
            Играть за <span className={styles.price}>199 Р / мес.</span>
          </a>
        </Link>
      </div>
    </section>
  );
};
