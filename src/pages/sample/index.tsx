import PracticeListLayout from "components/general/layout/practice/PracticeListLayout"

const SampleHome = () => {
  return <div className=" text-2xl">SampleHome</div>
}

SampleHome.getLayout = function getLayout(page) {
  return <PracticeListLayout>{page}</PracticeListLayout>
}

export default SampleHome
