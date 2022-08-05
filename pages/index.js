import Head from "next/head";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { GameList } from "../components/GameList";
import { cardsData } from "./api/cardsData";

export async function getStaticProps(context) {
  try {
    const response = await cardsData.get();
    const characterData = await response.data;

    return {
      props: { characterData },
    };
  } catch (error) {
    console.log(error);
  }
}

const Home = ({ characterData }) => {
  return (
    <>
      <Head>
        <title>Cloud-Gaming-Next.js-App</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="" />
      </Head>
      <Preview />
      <Slider />
      <QuestionBlock />
      <PlatformsAndGames />
      <GameList characterData={characterData} />
    </>
  );
};

export default Home;
