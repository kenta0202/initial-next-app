import React from "react"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}
const PracticeTitle: FC<Props> = React.memo(function PracticeTitle({ children }) {
  return <p className="  my-6 text-2xl font-medium text-center text-blue-400">{children}</p>
})

export default PracticeTitle
