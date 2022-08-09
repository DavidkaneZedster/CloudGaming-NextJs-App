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

export const getStaticProps = async (context) => {
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
};

const Game = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(["cardItem", id], () => getCardItem(id), {
    onError: (error) => {
      console.log(error.message);
    },
  });

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
                src={response.image}
                alt={response.name}
                width={550}
                height={350}
                priority={true}
              />
              <div className={styles.card__info}>
                <h2 className={styles.card__title}>
                  {response.id}, {response.name}
                </h2>
                <h4 className={styles.card__subtitle}>
                  {response.status} - {response.species}
                </h4>
                <div className={styles.last__location}>
                  <h4 className={styles.last__known}>Last known location:</h4>
                  {response.location.name}
                </div>
                <div className={styles.first__location}>
                  <h4 className={styles.first__known}>First seen in:</h4>
                  {response.origin.name}
                </div>
                <div className={styles.male}>Gender: {response.gender}</div>
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
