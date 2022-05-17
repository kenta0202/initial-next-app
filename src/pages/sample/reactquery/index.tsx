import ReacQueryLayout from "components/general/layout/practice/ReactQueryLayout"
import Sppinner from "components/general/Sppinner"
import FetchPageNation from "components/practice/reactquery/FetchPageNation"
import { Suspense } from "react"

const ReactQueryHome = () => {
  return <div>ReactQueryHome</div>
}

ReactQueryHome.getLayout = function getLayout(page) {
  return <ReacQueryLayout>{page}</ReacQueryLayout>
}

export default ReactQueryHome
