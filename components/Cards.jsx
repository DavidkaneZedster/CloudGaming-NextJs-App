import styles from "../styles/Cards.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cardsData } from "../pages/api/cardsData.js";

export const Cards = ({ characterData, searchValue }) => {
  const [currentData, setCurrentData] = useState(characterData);
  const [page, setPage] = useState(1);

  const totalPages = currentData?.info?.pages;
  const firstPage = 1;

  if (page < firstPage) {
    setPage(page + 1);
  } else if (page > totalPages) {
    setPage(page - 1);
  }

  const getData = async () => {
    const response = await cardsData.get(`/?page=${page}`);
    const data = await response.data;
    setCurrentData(data);
    return data;
  };

  const getNextPage = () => {
    setPage(page + 1);
  };

  const getPrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className={styles.cards} id={"back"}>
        {currentData?.results
          .filter((obj) => {
            if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((result) => {
            const { id, name, status, species, origin, location, image } =
              result;
            return (
              <div className={styles.cards__block} key={id}>
                <img className={styles.image} src={image} alt={name} />
                <div className={styles.card__info}>
                  <Link href={`/games/game/${id}`}>
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
        <div className={styles.btns}>
          <button className={styles.btn} onClick={() => getPrevPage()}>
            prev
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button className={styles.btn} onClick={() => getNextPage()}>
            next
          </button>
        </div>
      </div>
    </>
  );
};
