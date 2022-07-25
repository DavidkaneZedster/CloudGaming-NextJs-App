import styles from "../styles/SearchInput.module.css";
import Search from "../public/images/search.svg";

export const SearchInput = () => {
  return (
    <div className={styles.input__container}>
      <input className={styles.input} type="text" placeholder="Поиск" />
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  );
};
