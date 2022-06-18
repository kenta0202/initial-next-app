import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const ListItem: React.FC<Props> = ({ children }) => {
  return <li>{children}</li>
}

export default ListItem
