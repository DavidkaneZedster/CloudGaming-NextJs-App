import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { GameList } from "../components/GameList";

export async function getStaticProps(context) {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const characterData = await response.json();
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
