import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Notice, Task } from "interface/supabase/types"
import { supabase } from "util/supabase"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const Csr: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [notices, setNotices] = useState<Notice[]>([])
  useEffect(() => {
    const getTasks = async () => {
      const { data: tasks } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: true })
      setTasks(tasks as Task[])
    }
    const getNotices = async () => {
      const { data: notices } = await supabase
        .from("notices")
        .select("*")
        .order("created_at", { ascending: true })
      setNotices(notices as Notice[])
    }
    void getTasks()
    void getNotices()
  }, [])

  return (
    <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>
      <p className="mb-3 text-blue-500">SSG + CSF</p>
      <ul className="mb-3">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">{task.title}</p>
            </li>
          )
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">{notice.content}</p>
            </li>
          )
        })}
      </ul>
    </PracticeLayout>
  )
}

export default Csr
