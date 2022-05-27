import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import Button from "components/practice/hooks/useReducer/Bank/Button"
import Input from "components/practice/hooks/useReducer/Bank/Input"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import React, { useReducer, useState } from "react"

type TState = {
  savings: number
  histories: { operation: "預け入れ" | "引き出し"; amount: number }[]
}

type TAction = { type: "DEPOSIT"; payload: number } | { type: "WITHDRAW"; payload: number }

const initialState: TState = {
  savings: 100000,
  histories: [],
}

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        savings: state.savings + action.payload,
        histories: [...state.histories, { operation: "預け入れ", amount: action.payload }],
      }
    case "WITHDRAW":
      return {
        ...state,
        savings: state.savings - action.payload,
        histories: [...state.histories, { operation: "引き出し", amount: action.payload }],
      }
    default:
      return state
  }
}
const Bank = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = useState<number>(0)
  console.log(state)

  const onDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", payload: amount })
    setAmount(0)
  }
  const onWithdraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", payload: amount })
    setAmount(0)
  }

  return (
    <>
      <PracticeTitle>Bank</PracticeTitle>
      <div>
        <h4>残高:{state.savings.toLocaleString()}円</h4>
        <div className="">
          <div>
            <Input
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAmount(Number(e.target.value))
              }}
            />
            <span>円</span>
          </div>
          <div>
            <Button
              disabled={amount === 0}
              onClick={() => {
                onDeposit(amount)
              }}
            >
              預け入れ
            </Button>
            <Button
              disabled={amount === 0}
              onClick={() => {
                onWithdraw(amount)
              }}
            >
              引き出し
            </Button>
          </div>
          <div>
            <h4>履歴</h4>
            {state.histories.map((history) => {
              return (
                <p key={history.amount}>
                  {history.operation}:{history.amount.toLocaleString()}円
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

Bank.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default Bank
