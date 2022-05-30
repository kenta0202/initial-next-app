/* eslint-disable @typescript-eslint/require-await */
export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0)

// async/awaitサポートが組み込まれている
// テストケース
test("basic", async () => {
  expect(sum()).toBe(0)
})

// テストケース
test("basic again", async () => {
  expect(sum(1, 2)).toBe(3)
}, 1000 /* optional timeout */)

// テストスイート
describe("true is truthy and false is falsy", () => {
  // テストケース
  test("true is truthy", () => {
    expect(true).toBe(true)
  })

  //   テストケース
  test("false is falsy", () => {
    expect(false).toBe(false)
  })
})
