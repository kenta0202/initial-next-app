import date from "date-and-time"

const now = new Date()
export const getDate = () => {
  const DATE = date.format(now, "YYYY-MM-DD")
  return DATE
}
