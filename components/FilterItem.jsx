import styles from "../styles/FilterItem.module.css";
import ArrowDown from "../public/images/arrow-down.svg";

export const FilterItem = ({ name }) => {
  return (
    <>
      <div className={styles.filter}>
        <div className={styles.filter__label}>
          {name}
          <span className={styles.filter__active}>не выбрано</span>
        </div>
        <div className={styles.filter__list}>
          <ul className={styles.filter__menu}>
            <li className={styles.filter__menu_item}>
              <a className={styles.filter__menu_link} href="/"></a>
            </li>
          </ul>
        </div>
        <div className={styles.filter__arrow}>
          <ArrowDown />
        </div>
      </div>
    </>
  );
};
