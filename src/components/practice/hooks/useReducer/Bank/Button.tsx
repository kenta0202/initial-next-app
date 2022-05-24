import React from "react"

const Button: React.FC<{
  disabled: boolean
  onClick: () => void
  children: string
}> = ({ disabled, onClick, children }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
