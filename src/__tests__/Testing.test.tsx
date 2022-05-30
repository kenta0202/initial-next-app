import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Sample from "components/test/Sample"
import Power from "components/test/Power"
import userEvent from "@testing-library/user-event"

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

// fireEventではclickイベントのみしか実行されない △
// userEventではclickイベントだけではなく他のイベントも実行される 〇

describe("Power component", () => {
  // 電源ボタンが正しく表示されているか
  it("renders Power Component", () => {
    render(<Power name="電源" />)
    const nameElement = screen.getByText(/電源/i)
    expect(nameElement).toBeInTheDocument()
  })
  // OFFボタンがdisabledになっているか(初期状態)
  it("off button disabled", () => {
    render(<Power name="電源" />)
    const offButtonElement = screen.getByRole("button", { name: "OFF" })
    expect(offButtonElement).toBeDisabled()
  })
  // ONボタンをクリックしたときにONボタンはdisabledとなるか
  it("chagen from disabled to on(fireEvent)", () => {
    render(<Power name="電源" />)
    const onButtonElement = screen.getByRole("button", { name: "ON" })
    fireEvent.pointerDown(onButtonElement) /* コンソールにメッセージが表示 */
    fireEvent.click(onButtonElement)
    expect(onButtonElement).toBeDisabled()
  })
  // userEventの場合
  it("chagen from disabled to on(userEvent)", async () => {
    render(<Power name="電源" />)
    const onButtonElement = screen.getByRole("button", { name: "ON" })
    // 自動でクリックしたときのコンソールのログをターミナルに表示
    await userEvent.click(onButtonElement)
    expect(onButtonElement).toBeDisabled()
  })
})
