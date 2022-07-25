import styles from "../styles/NotFound.module.css";
import SearchImage from "../public/images/search__filters_item.svg";

export const NotFound = () => {
  return (
    <div className={styles.not__found}>
      <div className={styles.not__found_image}>
        <SearchImage />
      </div>
      <div className={styles.not__found_text}>
        По данному запросу ничего не нашлось
      </div>
    </div>
  );
};
