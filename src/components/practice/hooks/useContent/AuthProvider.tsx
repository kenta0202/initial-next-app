import React, { createContext, useContext, useState } from "react"

type Props = {
  children: React.ReactNode
}

// context変数の型
// この場合はstateとstate関数をもつ
type TState = {
  userAuth: boolean
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>
}

// ○○Context.Providerになる
export const AuthContext = createContext<TState | null>(null)

const AuthProvider: React.FC<Props> = ({ children }) => {
  // stateとstate関数
  const [userAuth, setUserAuth] = useState(false)

  return <AuthContext.Provider value={{ userAuth, setUserAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuthStateContext = (): TState => useContext(AuthContext)
