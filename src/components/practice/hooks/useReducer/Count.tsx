import React from "react"

// Presentainer
const Count: React.FC<{
  decrement: () => void
  increment: () => void
  reset: () => void
}> = ({ decrement, increment, reset }) => {
  return (
    <>
      <button onClick={increment} className="btn">
        <span className="text-3xl"> +</span>
      </button>
      <button onClick={decrement} className="btn">
        <span className="text-3xl"> -</span>
      </button>
      <button onClick={reset} className="btn">
        reset
      </button>
    </>
  )
}

export default Count
