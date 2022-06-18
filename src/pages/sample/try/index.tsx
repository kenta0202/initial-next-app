import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import OrderPage from "components/practice/try/ReactChildrenMap/OrderPage"
import { NextPageWithLayout } from "interface/general"

const TryHome: NextPageWithLayout = () => {
  return <OrderPage />
}

TryHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Try"} />}>{page}</PracticeLayout>
)

export default TryHome
