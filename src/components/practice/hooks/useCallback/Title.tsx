import PracticeTitle from "components/practice/common/PracticeTitle"
import React from "react"

type Props = {
  titleText: string
}

// コンポーネントのメモ化
const Title: React.FC<Props> = React.memo(function Title({ titleText }) {
  console.log("render Title")
  return <PracticeTitle>{titleText}</PracticeTitle>
})

export default Title
