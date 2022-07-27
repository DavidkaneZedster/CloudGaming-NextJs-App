import axios from "axios";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { GameList } from "../components/GameList";

export async function getStaticProps(context) {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/?page=3"
  );
  const characterData = await response.data;
  return {
    props: { characterData },
  };
}

const Home = ({ characterData }) => {
  return (
    <>
      <Preview />
      <Slider />
      <QuestionBlock />
      <PlatformsAndGames />
      <GameList characterData={characterData} />
    </>
  );
};

export default Home;
