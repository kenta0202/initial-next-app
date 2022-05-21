import { Task } from "interface/supabase/types"
import { supabase } from "util/supabase"

export const getTasks = async () => {
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: true })
  return tasks as Task[]
}
