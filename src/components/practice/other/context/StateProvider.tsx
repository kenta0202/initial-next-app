import { TTask } from "data/task"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type TStateContext = {
  tasks: TTask[] | null
  dark: boolean
  setTasks: Dispatch<SetStateAction<TTask[]>>
  setDark: Dispatch<SetStateAction<boolean>>
}

export const StateContext = createContext({} as TStateContext)

type Props = {
  children: React.ReactNode
}

export const StateProvider: React.FC<Props> = ({ children }) => {
  // stateとstate関数
  const [tasks, setTasks] = useState<TTask[] | null>(null)
  const [dark, setDark] = useState(false)

  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {/* 共有したいstateや関数 */}
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): TStateContext => useContext(StateContext)
