import PracticeLayout from "components/general/layout/practice/PracticeLayout"

const SampleHome = () => {
  return <div>SampleHome</div>
}

SampleHome.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>
}

export default SampleHome
