import { Task } from "interface/supabase/types"
import { useState } from "react"
import { supabase } from "util/supabase"

// CSRのuseEffect用
export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>()
  const getTasks = async () => {
    const { data: tasks } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: true })
    setTasks(tasks)
  }
  return { tasks, getTasks }
}
