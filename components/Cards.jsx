import styles from "../styles/Cards.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cardsData } from "../pages/api/cardsData.js";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export const Cards = ({ characterData, searchValue }) => {
  const [currentData, setCurrentData] = useState(characterData);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await cardsData.get(`/?page=${page}`);
    const data = await response.data;
    setCurrentData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, [page]);

  const totalPages = currentData?.info?.pages;
  const firstPage = 1;
  const query = useQuery(["cardsItems"], () => getData());

  const getNextPage = () => {
    setPage(page + 1);
  };

  const getPrevPage = () => {
    setPage(page - 1);
  };

  if (page < firstPage) {
    getNextPage();
  } else if (page > totalPages) {
    getPrevPage();
  }

  return (
    <>
      <div className={styles.cards} id={"back"}>
        {query.isLoading ? (
          <div className="system__notifications">Loading...</div>
        ) : query.isError ? (
          <div className="system__notifications">Error!</div>
        ) : (
          currentData?.results
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
                  <Image
                    className={styles.image}
                    src={image}
                    alt={name}
                    width={410}
                    height={410}
                    priority={true}
                  />
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
                      <h4 className={styles.last__known}>
                        Last known location:
                      </h4>
                      {location.name}
                    </div>
                    <div className={styles.first__location}>
                      <h4 className={styles.first__known}>First seen in:</h4>
                      {origin.name}
                    </div>
                  </div>
                </div>
              );
            })
        )}
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
