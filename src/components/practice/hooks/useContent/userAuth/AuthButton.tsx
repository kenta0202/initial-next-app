import { useContext } from "react"
import { AuthContext } from "components/practice/hooks/useContent/AuthProvider"

const AuthButton = () => {
  console.log("render Button")

  // context変数
  const auth = useContext(AuthContext)

  const handleSignOut = () => {
    auth?.setUserAuth(false)
  }
  const handleSignIn = () => {
    auth?.setUserAuth(true)
  }

  return (
    <>
      {auth?.userAuth ? (
        <button onClick={handleSignOut} className="btn">
          ログアウト
        </button>
      ) : (
        <button onClick={handleSignIn} className="btn">
          ログイン
        </button>
      )}
    </>
  )
}

export default AuthButton
