/* eslint-disable import/extensions */
import Button from "."

export default {
  title: "Button" /* フォルダ名 */,
  component: Button,
}

// 名前
export const HelloButton = () => <Button>Hello World!</Button>

export const ClickButton = () => <Button>Click!</Button>
