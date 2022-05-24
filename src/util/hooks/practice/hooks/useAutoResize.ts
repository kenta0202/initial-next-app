import { useEffect, useRef } from "react"

export const useAutoResize = (value: string) => {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // 現在参照している要素を取得
    const element = ref.current
    if (!element) {
      return
    }
    // 最低限の高さを保持して、文字の大きさに合わせてtextareaが縮むようにする
    element.style.height = "auto"
    // element.scrollHeight:あふれて画面上に表示されない部分も含めた、要素の中身の高さ
    element.style.height = `${element.scrollHeight}px`
    console.log(element.scrollHeight)
  }, [value])

  return ref
}
