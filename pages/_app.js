import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import Layout from "../components/Layout.jsx";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
