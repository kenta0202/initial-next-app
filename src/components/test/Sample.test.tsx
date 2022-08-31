import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Sample from "components/test/Sample"

describe("Sample component", () => {
  it("renders multiple Hello", () => {
    render(<Sample />)
    const elements = screen.getAllByText("Hello")
    //   /* queryByTextでも可 この場合エラーは要素を見つけられなかったからではなく、
    //    nullになっていることでエラーになる */
    // screen.debug(elements) /* 実際の中身を確認したい */
    // テストを行う内容によってmatchers関数も適切なものに変更する必要がある
    expect(elements).toHaveLength(2)
  })

  it("renders heading", () => {
    render(<Sample />)
    const headElement = screen.getByRole(/* "heading" */ "heading", { name: "Hello" })
    // screen.debug(headElement)
    expect(headElement).toBeInTheDocument()
  })

  it("renders test data-testid属性", () => {
    render(<Sample />)
    const element = screen.getByTestId("test")
    expect(element).toBeInTheDocument()
  })
})
