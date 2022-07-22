import { Filters } from "../components";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Preview />
      <Slider />
      <QuestionBlock />
      <PlatformsAndGames />
      <Filters />
    </>
  );
};

export default Home;
