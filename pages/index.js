import Head from "next/head";
import axios from "axios";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { GameList } from "../components/GameList";
import { apiKey } from "../constants";

export async function getStaticProps(context) {
  const response = await axios.get(`${apiKey}`);
  const characterData = await response.data;
  return {
    props: { characterData },
  };
}

const Home = ({ characterData }) => {
  return (
    <>
      <Head>
        <title>Cloud-Gaming-Next.js-App</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
