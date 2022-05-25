import { useContext } from "react"
import { AuthContext, useAuthStateContext } from "components/practice/hooks/useContent/AuthProvider"

const AuthButton = () => {
  console.log("render Button")

  const { setUserAuth, userAuth } = useAuthStateContext()

  const handleSignOut = () => {
    setUserAuth(false)
  }
  const handleSignIn = () => {
    setUserAuth(true)
  }

  return (
    <>
      {userAuth ? (
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
