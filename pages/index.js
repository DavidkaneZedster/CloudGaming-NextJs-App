import Head from "next/head";
import { PlatformsAndGames } from "../components";
import { Preview } from "../components";
import { QuestionBlock } from "../components";
import { Slider } from "../components";
import { GameList } from "../components/GameList";
import { cardsData } from "./api/cardsData";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

export const getCharacterData = async () => {
  const { data } = await cardsData.get();
  return data;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery(["characterData"], () =>
      getCharacterData()
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Home = () => {
  const { data } = useQuery(["characterData"], () => getCharacterData(), {
    onError: (error) => {
      console.log(error.message);
    },
  });

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
      <GameList characterData={data} />
    </>
  );
};

export default Home;
