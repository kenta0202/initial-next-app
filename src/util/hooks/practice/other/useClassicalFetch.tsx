/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState, useEffect } from "react"
import { useStateContext } from "components/practice/other/context/StateProvider"
import axios from "axios"

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  // fetch every mount
  // always animation spiner
  useEffect(() => {
    //   voidを返すPromise関数
    const fetchData = async () => {
      setError(false)
      setLoading(true) /* 2回目の再レンダリング Loading中*/
      try {
        const res = await axios(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks`)
        setTasks(res.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false) /* 3回目の再レンダリング tasksによって見た目が変わる */
    }
    void fetchData()
    // setTasksに依存してるので依存関係を指定する
  }, [setTasks])

  return { tasks, isLoading, isError }
}
