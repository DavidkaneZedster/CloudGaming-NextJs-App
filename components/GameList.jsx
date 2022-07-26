import { useState } from "react";
import { Cards } from "./Cards";
import { Filters } from "./Filters";
import { NotFound } from "./NotFound";

export const GameList = ({ characterData }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container">
      <Filters searchValue={searchValue} setSearchValue={setSearchValue} />
      {characterData == null ? (
        <NotFound />
      ) : (
        <Cards characterData={characterData} searchValue={searchValue} />
      )}
    </div>
  );
};
