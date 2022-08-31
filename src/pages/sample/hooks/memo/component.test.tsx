import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "components/practice/hooks/memo/Counter"
import Comp from "pages/sample/hooks/memo/component"
import React from "react"

describe("sample/hooks/memo/component", () => {
  it("[button1]Should increment correctly", async () => {
    void render(<Comp />)
    expect(screen.getByText("コンポーネントのメモ化 (useMemo)") /* HTMLElement */).toBeTruthy()
    await userEvent.click(screen.getAllByRole("button")[0])
    expect(screen.getByTestId("count1").innerHTML /* string */).toBe("Counter: 1")
  })
  it("[button2]Should increment correctly", () => {
    void render(<Counter count2={1} />)
    expect(screen.getByTestId("count2").innerHTML /* string */).toBe("Counter: 1, 2")
  })
})
