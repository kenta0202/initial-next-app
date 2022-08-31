/* eslint-disable import/extensions */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Button } from "./Button"

describe("Button", () => {
  test("should call onClick", async () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>label</Button>)
    await userEvent.click(screen.getByRole("button"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
