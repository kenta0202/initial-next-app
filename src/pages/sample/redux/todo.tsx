import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const Todo = () => {
  return <div>todo</div>
}
Todo.getLayout = function getLayout(page) {
  return <PracticeLayout NavBarElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
}

export default Todo
