import React from "react"

type Props = {
  buttonText: string
  onClick: () => void
}

// コンポーネントのメモ化
// Buttonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
// React.memoでPropsの前後の値を比較してレンダリングするか決定
const Button: React.FC<Props> = React.memo(function Button({ buttonText, onClick }) {
  console.log(`Button:${buttonText}`)
  return (
    <div>
      <button onClick={onClick} className="btn">
        {buttonText}
      </button>
    </div>
  )
})

export default Button
