import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

const Todo = () => {
  return <div>todo</div>
}
Todo.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReduxSampleNavBar />}>{page}</PracticeLayout>
}

export default Todo
