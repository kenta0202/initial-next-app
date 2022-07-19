import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import OrderPage from "components/practice/try/ReactChildrenMap/OrderPage"

const todoPage = () => {
  return (
    <>
      <PracticeTitle>CustomAPIServer+useQuery+RTK</PracticeTitle>
      <OrderPage />
    </>
  )
}

todoPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Other"} />}>{page}</PracticeLayout>
)
export default todoPage
