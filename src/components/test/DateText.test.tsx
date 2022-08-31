/* eslint-disable import/extensions */
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { DateText } from "./DateText"

test("should render date", () => {
  jest.useFakeTimers()
  // システムの日時を1991/08/02に変更
  jest.setSystemTime(new Date("1991/08/02").getTime())

  render(<DateText />)
  screen.debug()
  expect(screen.getByText("1991/08/02")).toBeInTheDocument()

  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
