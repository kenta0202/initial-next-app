import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

const List: FC<Props> = ({ children }) => {
  return (
    <ul>
      {React.Children.map(children, (child) => {
        return <li>{child}</li>
      })}
    </ul>
  )
}

export default List
