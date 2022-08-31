import { fireEvent, render, screen } from "@testing-library/react"
import Power from "components/test/Power"
import userEvent from "@testing-library/user-event"

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
