import "../../styles/normalize.css";
import "../../styles/global.css";
import "../../styles/dist.css";

import React from "react";
import HeadInformation from "components/general/HeadInformation";
// import type { AppProps } from "next/app";
// import Layout from "components/general/Layout";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  // Q: AppProps型がつくとgetLayoutがはじかれる
  return (
    <>
      <HeadInformation />
      {getLayout(<Component {...pageProps} />)}
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
