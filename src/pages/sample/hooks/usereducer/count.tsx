/* eslint-disable react-hooks/rules-of-hooks */
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import Count from "components/practice/hooks/useReducer/Count"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import { useReducer } from "react"

// Actionの値の列挙型
const CountCategory = {
  INCEREMENT: "INCEREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
} as const

// Actionの値の列挙型のユニオン型
type TUnionCountCatelory = typeof CountCategory[keyof typeof CountCategory]

// Actionの型
export type TCountAction = {
  type: TUnionCountCatelory
}

// Stateの型
type TState = {
  count: number
}

const InitialState: TState = {
  count: 100,
}
function reducer(state: TState, action: TCountAction) {
  switch (action.type) {
    case CountCategory.INCEREMENT:
      return { count: state.count + 1 }
    case CountCategory.DECREMENT:
      return { count: state.count - 1 }
    case CountCategory.RESET:
      return { count: 0 }
    default:
      return state
  }
}
// Container
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  return (
    <>
      <PracticeTitle>Counter</PracticeTitle>
      <p>Count: {state.count}</p>
      <Count
        decrement={() => dispatch({ type: "DECREMENT" })}
        increment={() => dispatch({ type: "INCEREMENT" })}
        reset={() => dispatch({ type: "RESET" })}
      />
    </>
  )
}

Counter.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default Counter
