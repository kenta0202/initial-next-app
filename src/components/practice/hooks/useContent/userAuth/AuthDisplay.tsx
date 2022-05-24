import { useContext } from "react"
import { AuthContext } from "components/practice/hooks/useContent/AuthProvider"

const AuthDisplay = () => {
  console.log("render Display")

  const auth = useContext(AuthContext)
  return <div>{auth?.userAuth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>
}

export default AuthDisplay
