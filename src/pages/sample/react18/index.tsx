import PracticeLayout from "components/general/layout/PracticeLayout";

const React18 = () => {
  return <div>React18 basic lesson</div>;
};

React18.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>;
};

export default React18;
