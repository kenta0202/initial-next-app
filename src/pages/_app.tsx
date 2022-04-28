// import "../styles/normalize.css";
import "../styles/global.css";
import "../styles/dist.css";

import React from "react";
import HeadInformation from "components/general/HeadInformation";
import { Provider } from "react-redux";
import { store } from "app/store";
// import type { AppProps } from "next/app";
// import Layout from "components/general/Layout";
import { Suspense } from "react";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  // Q: AppProps型がつくとgetLayoutがはじかれる
  return (
    <>
      <HeadInformation />
      <Provider store={store}>
        {/* {getLayout */}
        {/* <Suspense fallback={<div>...loading</div>}> */}
        <Component {...pageProps} />
        {/* </Suspense> */}
        {/* } */}
      </Provider>
      {/*
       Name.getLayout = function getLayout(page) {
       return <Layout>{page}</Layout>;
       各コンポーネントでGetLayoutメソッドを実行することでレイアウトを指定できる
       };
     */}
    </>
  );
};

export default MyApp;
