import Link from "next/link"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { GetStaticProps } from "next"
import { supabase } from "util/supabase"
import { Notice, Task } from "interface/supabase/types"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps/isr invoked")
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: true })
  const { data: notices } = await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: true })
  // 新しいものが一番下
  return { props: { tasks, notices }, revalidate: 5 }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Isr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()

  return (
    <PracticeLayout sampleElement={<ReduxSampleNavBar />}>
      <p className="mb-3 text-indigo-500">ISR</p>
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
        {/* マウスオーバーをトリガーに遷移先のgetStaticPropsを実行しない */}
        <a className="my-3 text-xs"> Link to ssr</a>
      </Link>
      <button
        className="mb-3 text-xs"
        onClick={() => {
          void router.push("./ssr")
        }}
      >
        Route to ssr
      </button>
    </PracticeLayout>
  )
}

// Isr.getLayout = function getLayout(page) {
//     return <Layout>{page}</Layout>
//   }

export default Isr
