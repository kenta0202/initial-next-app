import NavBar from "."
// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: "Common",
  // 使用するコンポーネント

  component: NavBar,
}

export const NavBarHooks = (props) => {
  return <NavBar sampleName={"Hooks"} />
}
