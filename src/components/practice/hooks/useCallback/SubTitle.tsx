import React from "react"

type Props = { subTitleText: string }

// コンポーネントのメモ化
const SubTitle: React.FC<Props> = React.memo(function SubTitle({ subTitleText }) {
  console.log("render SubTitle")

  return <h3>{subTitleText}</h3>
})

export default SubTitle
