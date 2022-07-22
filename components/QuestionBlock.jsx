import styles from "../styles/QuestionBlock.module.css";

export const QuestionBlock = ({ children }) => {
  return (
    <section className={styles.question__block}>
      <div className="container">
        <div className={styles.question__play}>
          Играть можно{" "}
          <span className={styles.question__span}>на чем угодно</span>?
        </div>
        <div className={styles.question__subscription}>
          Да! Достаточно лишь оплатить подписку и установить лаунчер
        </div>
      </div>
      {children}
    </section>
  );
};
