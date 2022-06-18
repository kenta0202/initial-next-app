import React from "react"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}
const PracticeTitle: FC<Props> = React.memo(function PracticeTitle({ children }) {
  return <p className="  my-6 text-xl font-medium text-blue-400">■{children}</p>
})

export default PracticeTitle
