import { FC } from "react"

export type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
