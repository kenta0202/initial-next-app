import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import UseCallback from "components/practice/hooks/useCallback"
import NavBar from "components/practice/NavBar"

const usecallback = () => {
  return <UseCallback />
}

export default usecallback

usecallback.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
