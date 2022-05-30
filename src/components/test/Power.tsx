import { useState } from "react"

function Power({ name }) {
  const [power, setPower] = useState(false)

  return (
    <div style={{ margin: "2em" }}>
      <h1>
        {name} {power ? "ON" : "OFF"}
      </h1>
      <button
        onClick={() => setPower(true)}
        disabled={power ? true : false}
        onPointerDown={() => console.log("ONボタンクリック")}
      >
        ON
      </button>
      <button
        onClick={() => setPower(false)}
        disabled={!power ? true : false}
        onPointerDown={() => console.log("OFFボタンクリック")}
      >
        OFF
      </button>
    </div>
  )
}

export default Power
