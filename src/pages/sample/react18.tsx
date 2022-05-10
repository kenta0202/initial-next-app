import Layout from "components/general/layout/Layout";

const React18 = () => {
  return <div>React18</div>;
};

React18.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default React18;
