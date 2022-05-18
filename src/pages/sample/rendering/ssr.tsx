import Link from "next/link"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { GetServerSideProps } from "next"
import { Task, Notice } from "interface/supabase/types"
import { supabase } from "util/supabase"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("getServerSideProps/ssr invoked")
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

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()
  return (
    <PracticeLayout sampleElement={<ReduxSampleNavBar />}>
      <p className="mb-3 text-pink-500">SSR</p>
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
      {/*

      */}
      <Link href="./ssg" prefetch={false}>
        <a className="my-3 text-xs"> Link to ssg</a>
      </Link>
      <Link href="./isr" prefetch={false}>
        <a className="mb-3 text-xs"> Link to isr</a>
      </Link>
      <button
        className="mb-3 text-xs"
        onClick={() => {
          void router.push("/ssg")
        }}
      >
        Route to ssg
      </button>
      <button
        className="mb-3 text-xs"
        onClick={() => {
          void router.push("./isr")
        }}
      >
        Route to isr
      </button>
    </PracticeLayout>
  )
}

export default Ssr
