import styles from "../styles/Cards.module.css";
import Link from "next/link";

export const Cards = ({ characterData }) => {
  return (
    <>
      <div className={styles.cards}>
        {characterData?.results.map((result) => {
          const { id, name, status, species, gender, origin, location, image } =
            result;
          return (
            <div className={styles.cards__block} key={id}>
              <img className={styles.image} src={image} alt={name} />
              <div className={styles.card__info}>
                <Link href="/req">
                  <h2 className={styles.card__title}>
                    <a>{name}</a>
                  </h2>
                </Link>
                <h3 className={styles.card__subtitle}>
                  {status} - {species}
                </h3>
                <div className={styles.last__location}>
                  <h4 className={styles.last__known}>Last known location:</h4>
                  {location.name}
                </div>
                <div className={styles.first__location}>
                  <h4 className={styles.first__known}>First seen in:</h4>
                  {origin.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
