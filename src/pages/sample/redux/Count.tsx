import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import { selectCount, increment, decrement } from "features/countSlice"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "components/practice/NavBar"

const Count = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  return (
    <div className="flex gap-2 text-2xl ">
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

Count.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
}

export default Count
