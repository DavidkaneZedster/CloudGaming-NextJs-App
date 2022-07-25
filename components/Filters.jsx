import styles from "../styles/Filters.module.css";
import { filtersName } from "../assets";
import { FilterItem } from ".";
import { SearchInput } from ".";

export const Filters = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.filters}>
          <div className={styles.search}>
            <SearchInput />
          </div>
          <div className={styles.filter}>
            {filtersName.map((item) => {
              return <FilterItem name={item.name} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
