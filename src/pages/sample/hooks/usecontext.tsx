import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import AuthProvider from "components/practice/hooks/useContent/AuthProvider"
import AuthButton from "components/practice/hooks/useContent/userAuth/AuthButton"
import AuthDisplay from "components/practice/hooks/useContent/userAuth/AuthDisplay"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { NextPageWithLayout } from "interface/general"

const UseContext: NextPageWithLayout = () => {
  console.log("render")
  return (
    <>
      <PracticeTitle>ユーザ認証 (useContext)</PracticeTitle>
      <AuthProvider>
        <AuthButton />
        <AuthDisplay />
      </AuthProvider>
    </>
  )
}

UseContext.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default UseContext
