import PracticeListLayout from "components/general/layout/practice/PracticeListLayout"
import PracticeTitle from "components/practice/common/PracticeTitle"

const SampleHome = () => {
  return <PracticeTitle>SampleHome</PracticeTitle>
}

SampleHome.getLayout = function getLayout(page) {
  return <PracticeListLayout>{page}</PracticeListLayout>
}

export default SampleHome
