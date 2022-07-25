import Link from "next/link";
import styles from "../styles/Modal.module.css";
import Close from "../public/images/close__modal.svg";

export const Modal = ({
  isModalVisible,
  setIsModalVisible,
  toggleScrolling,
}) => {
  const closeModal = () => {
    setIsModalVisible(!isModalVisible);
    toggleScrolling();
  };

  return (
    <>
      {isModalVisible && (
        <div
          className={styles.modal__wrapper}
          onClick={(e) => e.currentTarget === e.target && closeModal()}
        >
          <form className={styles.modal__container}>
            <div className={styles.close__icon} onClick={() => closeModal()}>
              <Close />
            </div>
            <h2 className={styles.login}>Войти в аккаунт</h2>
            <div className={styles.email}>
              <span className={styles.email__text}>E-mail</span>
              <input className={styles.email__input} type="text" />
            </div>
            <div className={styles.password}>
              <span className={styles.password__text}>Пароль</span>
              <input className={styles.password__input} type="text" />
            </div>
            <div className={styles.password__reset}>Забыли пароль?</div>
            <div className={styles.login__btn}>
              <Link href="/req">
                <a>Войти</a>
              </Link>
            </div>
            <p className={styles.registration}>
              Еще нет аккаунта?{" "}
              <span className={styles.registration__span}>
                Зарегистрируйтесь
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
