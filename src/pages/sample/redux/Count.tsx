import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import { selectCount, increment, decrement, toggleMode, selectMode } from "features/countSlice"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useAppDispatch, useAppSelector } from "app/hooks"

const Count = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const mode = useAppSelector(selectMode)
  console.log("Render")
  return (
    <>
      <PracticeTitle>Counter</PracticeTitle>
      <div className="flex gap-2 text-2xl ">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>{mode ? "mode on" : "mode off"}</div>
      <button className="btn" onClick={() => dispatch(toggleMode())}>
        toggle mode
      </button>
    </>
  )
}

Count.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
)

export default Count
