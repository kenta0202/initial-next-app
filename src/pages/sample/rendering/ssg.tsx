import Link from "next/link"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { GetStaticProps } from "next"
import { supabase } from "util/supabase"
import { Task, Notice } from "interface/supabase/types"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps/ssg invoked")
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: true })
  const { data: notices } = await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: true })
  // 新しいものが一番下
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Ssg: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()

  return (
    <PracticeLayout sampleElement={<ReduxSampleNavBar />}>
      <p className="mb-3 text-blue-500">SSG</p>
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
      <Link href="./ssr" prefetch={false}>
        <a className="my-3 text-xs"> Link to ssr</a>
      </Link>
      <button
        className="mb-3 text-xs"
        onClick={() => {
          void router.push("/ssr")
        }}
      >
        Route to ssr
      </button>
    </PracticeLayout>
  )
}

export default Ssg
