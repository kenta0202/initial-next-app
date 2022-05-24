import React from "react"

type Props = {
  countertitle: string
  count: number
}

// コンポーネントのメモ化
const Counter: React.FC<Props> = React.memo(function Counter({ countertitle, count }) {
  console.log(`Counter:${countertitle}`)
  return (
    <div>
      {countertitle}:<span>{count}人</span>
    </div>
  )
})

export default Counter
