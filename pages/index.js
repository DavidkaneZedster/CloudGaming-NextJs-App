import PlatformsAndGames from "../components/PlatformsAndGames";
import Preview from "../components/Preview";
import QuestionBlock from "../components/QuestionBlock";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Preview />
      <Slider />
      <QuestionBlock></QuestionBlock>
      <PlatformsAndGames />
    </>
  );
};

export default Home;
