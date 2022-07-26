import Link from "next/link";
import styles from "../../../styles/CardItem.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const paths = data?.results?.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};

const Game = ({ data }) => {
  console.log(data);
  const { id, name, status, species, gender, origin, location, image } = data;
  return (
    <div className="container">
      <div className={styles.cards}>
        <div className={styles.cards__block}>
          <img className={styles.image} src={image} alt={name} />
          <div className={styles.card__info}>
            <h2 className={styles.card__title}>
              {id}, {name}
            </h2>
            <h4 className={styles.card__subtitle}>
              {status} - {species}
            </h4>
            <div className={styles.last__location}>
              <h4 className={styles.last__known}>Last known location:</h4>
              {location.name}
            </div>
            <div className={styles.first__location}>
              <h4 className={styles.first__known}>First seen in:</h4>
              {origin.name}
            </div>
            <div className={styles.male}>Gender: {gender}</div>
          </div>
        </div>
      </div>
      <Link href="/">
        <a>
          <h2 className={styles.back__btn}>go back</h2>
        </a>
      </Link>
    </div>
  );
};

export default Game;