import { useEffect } from "react"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import { NextPageWithLayout } from "interface/general"
import { useTasks } from "util/hooks/practice/supabase/useTasks"
import { useNotices } from "util/hooks/practice/supabase/useNotices"
import PracticeTitle from "components/practice/PracticeTitle"

const Csr: NextPageWithLayout = () => {
  const { tasks, getTasks } = useTasks()
  const { notices, getNotices } = useNotices()

  useEffect(() => {
    void getTasks()
    void getNotices()
  }, [])

  return (
    <>
      <PracticeTitle>SSG + CSF</PracticeTitle>
      <ul className="mb-3">
        {/*
        ■Optional Chaining
        tasksとnoticesがfalsyならエラーではなくundefindを返す→何も表示されない
        */}
        {tasks?.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">{task.title}</p>
            </li>
          )
        })}
      </ul>
      <ul className="mb-3">
        {notices?.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">{notice.content}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

Csr.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
)
export default Csr
