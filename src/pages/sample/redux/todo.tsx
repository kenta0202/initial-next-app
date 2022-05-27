import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

const Todo = () => {
  return <PracticeTitle>Todo</PracticeTitle>
}
Todo.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
)

export default Todo
