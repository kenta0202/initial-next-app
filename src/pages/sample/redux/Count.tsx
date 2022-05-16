import ReduxLayout from "components/general/layout/practice/ReduxLayout"
import { selectCount, increment, decrement } from "features/countSlice"
import { useDispatch, useSelector } from "react-redux"

const Count = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  return (
    <ReduxLayout>
      <div className="flex gap-2 text-2xl ">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </ReduxLayout>
  )
}

export default Count
