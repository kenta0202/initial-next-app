import React from "react"

const Input: React.FC<{
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} className="text-darkgrey" />
}

export default Input
