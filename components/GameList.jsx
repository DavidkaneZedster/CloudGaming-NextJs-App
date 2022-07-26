import { Cards } from "./Cards";
import { Filters } from "./Filters";
import { NotFound } from "./NotFound";

export const GameList = ({ characterData }) => {
  return (
    <div className="container">
      <Filters />
      {characterData == null ? (
        <NotFound />
      ) : (
        <Cards characterData={characterData} />
      )}
    </div>
  );
};
