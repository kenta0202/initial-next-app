import axios from "axios"
import { getPersonById } from "util/func/promise/internal-api/getPersonById"
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

// getPersonById()
mockedAxios.get.mockResolvedValue({ data: { name: "たかし", id: 1, age: 2 } })

it("axios return mock value", async () => {
  // const res = await getPersonById("1")
  // expect(res.name).toBe("たかし")

  return getPersonById("1").then((res) => {
    expect(res.name).toBe("たかし")
  })
})
