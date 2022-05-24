import React from "react"

// 引数の数値を２倍にして返す。
// 無駄なループを実行しているため計算にかなりの時間がかかる。
const double = (count: number) => {
  let i = 0
  while (i < 1000000000) i++
  return count * 2
}

type Props = {
  count2: number
}

// メモ化
// Propsが変更されない限りは、再レンダリングしない
const Counter: React.FC<Props> = React.memo(function Counter({ count2 }) {
  console.log("render Counter")
  const doubledCount = double(count2)
  return (
    <p>
      Counter: {count2}, {doubledCount}
    </p>
  )
})

// Notメモ化
// const Counter: React.FC<Props> = function Counter({ count2 }) {
//   console.log("render Counter")
//   const doubledCount = double(count2)
//   return (
//     <p>
//       Counter: {count2}, {doubledCount}
//     </p>
//   )
// }

export default Counter
