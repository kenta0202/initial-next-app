/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TestingPage from "pages/sample/other/testing"
import renderer from "react-test-renderer"

it("renders TestingPage unchanged", () => {
  const tree = renderer.create(<TestingPage />).toJSON()
  expect(tree).toMatchSnapshot()
})
