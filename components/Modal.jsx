import Link from "next/link";
import styles from "../styles/Modal.module.css";
import Close from "../public/images/close__modal.svg";
import { useForm } from "react-hook-form";
import { useAtom, atom } from "jotai";

const adminData = {
  login: "admin",
  password: "admin",
};

export const userAtom = atom("");

export const Modal = ({
  isModalVisible,
  setIsModalVisible,
  toggleScrolling,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [isUserName, setIsUserName] = useAtom(userAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    isLoggedChecked(data);
  };

  const isLoggedChecked = (data) => {
    try {
      if (
        adminData.login === data.login &&
        adminData.password === data.password
      ) {
        alert("success");
        reset();
        setIsLoggedIn(true);
        setIsUserName(data.login);
      } else {
        alert("nothing");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedOut = () => {
    setIsLoggedIn(false);
    setIsUserName("");
    closeModal();
    alert("u are logged out");
  };

  const closeModal = () => {
    setIsModalVisible(!isModalVisible);
    toggleScrolling();
    reset();
  };

  return (
    <>
      {isModalVisible && (
        <div
          className={styles.modal__wrapper}
          onClick={(e) => e.currentTarget === e.target && closeModal()}
        >
          <form
            className={styles.modal__container}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.close__icon} onClick={() => closeModal()}>
              <Close />
            </div>
            <h2 className={styles.login}>Войти в аккаунт</h2>
            <div className={styles.email}>
              <span className={styles.email__text}>E-mail</span>
              <input
                className={styles.email__input}
                type="text"
                {...register("login", {
                  required: "field is require",
                })}
              />
              {errors.login && (
                <div style={{ color: "red" }}>{errors.login.message}</div>
              )}
            </div>
            <div className={styles.password}>
              <span className={styles.password__text}>Пароль</span>
              <input
                className={styles.password__input}
                type="text"
                {...register("password", {
                  required: "field is require",
                  maxLength: 20,
                })}
              />
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password.message}</div>
              )}
            </div>
            <div className={styles.password__reset}>
              <Link href="/">
                <a>Забыли пароль?</a>
              </Link>
            </div>
            <div className={styles.auth__btn_container}>
              {isLoggedIn ? null : (
                <button
                  className={styles.login__btn}
                  type="submit"
                  onClick={() =>
                    setTimeout(() => {
                      closeModal();
                    }, 100)
                  }
                >
                  Войти
                </button>
              )}
            </div>
            <Link href="">
              <div className={styles.auth__btn_container}>
                <button
                  className={styles.logout__btn}
                  onClick={() => isLoggedOut()}
                >
                  LogOut
                </button>
              </div>
            </Link>
            <p className={styles.registration}>
              Еще нет аккаунта?
              <span className={styles.registration__span}>
                <Link href="/">
                  <a> Зарегистрируйтесь</a>
                </Link>
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
