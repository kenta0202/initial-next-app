/* eslint-disable import/extensions */
import React, { ReactNode } from "react"
import ListItem from "./ListItem"

type Props = {
  children: ReactNode
}

const OrderedList: React.FC<Props> = ({ children }) => {
  return (
    <ol>
      {React.Children.map(children, (child) => {
        return <ListItem>{child}</ListItem>
      })}
    </ol>
  )
}

export default OrderedList
