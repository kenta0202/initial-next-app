import { useAuthStateContext } from "components/practice/hooks/useContent/AuthProvider"

const AuthDisplay = () => {
  console.log("render Display")

  const { userAuth } = useAuthStateContext()
  return <div>{userAuth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>
}

export default AuthDisplay
