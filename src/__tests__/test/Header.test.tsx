import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Header from "components/general/Header"

// このファイルはTypeScriptなので、.tsではなく.ts
// JESTはNodejs環境で実行されるので、何も設定しまいとESModuleは読み込めない
test("Headerの文字がある", () => {
  render(<Header />)
  const linkElement = screen.getByText(/Header/i)
  expect(linkElement).toBeInTheDocument()
})
