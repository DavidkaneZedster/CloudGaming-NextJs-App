import { Filters } from "../components";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { NotFound } from "../components/NotFound";

const Home = () => {
  return (
    <>
      <Preview />
      <Slider />
      <QuestionBlock />
      <PlatformsAndGames />
      <div className="container">
        <Filters />
        <NotFound />
      </div>
    </>
  );
};

export default Home;
