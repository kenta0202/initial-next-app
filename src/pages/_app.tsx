import "../styles/dist.css";
import "../styles/normalize.css";
import "../styles/global.css";

import React from "react";
import HeadInformation from "components/general/HeadInformation";
import { Provider } from "react-redux";
import { store } from "app/store";
// import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false /* 失敗したときのRetryをfalse */,
      refetchOnWindowFocus: false /* フォーカスしたときの自動フェッチfalse */,
      suspense: true,
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  // Q: AppProps型がつくとgetLayoutがはじかれる
  return (
    <>
      <HeadInformation />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default MyApp;
