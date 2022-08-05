import Link from "next/link";
import styles from "../../../styles/CardItem.module.css";
import { cardsData } from "../../api/cardsData";

export const getStaticPaths = async () => {
  try {
    const { data } = await cardsData.get("/?page=1");
    const paths = data?.results?.map((item) => {
      return {
        params: { id: item.id.toString() },
      };
    });

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const { data } = await cardsData.get(`/${id}`);
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Game = ({ data }) => {
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
      <Link href="/#back">
        <a>
          <h2 className={styles.back__btn}>go back</h2>
        </a>
      </Link>
    </div>
  );
};

export default Game;
