import Link from "next/link";
import styles from "../../../styles/CardItem.module.css";
import { cardsData } from "../../api/cardsData";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  try {
    const { data } = await cardsData.get("/?page=1");
    const paths = data?.results?.map((item) => {
      return {
        params: {
          id: item.id.toString(),
        },
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

export const getCardItem = async (id) => {
  const { data } = await cardsData.get(`/${id}`);
  return data;
};

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  try {
    const id = context.params.id;
    await queryClient.prefetchQuery(["cardItem"], () => getCardItem(id));
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Game = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useQuery(
    ["cardItem"],
    () => getCardItem(id),
    {
      onError: (error) => {
        console.log(error.message);
      },
    }
  );

  return (
    <>
      {isLoading ? (
        <div className="system__notifications">loading...</div>
      ) : error ? (
        <div className="system__notifications">
          Error : {JSON.stringify(error)}
        </div>
      ) : (
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.cards__block}>
              <Image
                className={styles.image}
                src={data.image}
                alt={data.name}
                width={550}
                height={350}
                priority={true}
              />
              <div className={styles.card__info}>
                <h2 className={styles.card__title}>
                  {data.id}, {data.name}
                </h2>
                <h4 className={styles.card__subtitle}>
                  {data.status} - {data.species}
                </h4>
                <div className={styles.last__location}>
                  <h4 className={styles.last__known}>Last known location:</h4>
                  {data.location.name}
                </div>
                <div className={styles.first__location}>
                  <h4 className={styles.first__known}>First seen in:</h4>
                  {data.origin.name}
                </div>
                <div className={styles.male}>Gender: {data.gender}</div>
              </div>
            </div>
          </div>
          <Link href="/#back">
            <a>
              <h2 className={styles.back__btn}>go back</h2>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Game;
