import Link from "next/link"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import { Task, Notice } from "interface/supabase/types"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import { NextPageWithLayout } from "interface/general"
import { getTasks } from "util/func/promise/supabase/getTasks"
import { getNotices } from "util/func/promise/supabase/getNotices"
import PracticeTitle from "components/practice/common/PracticeTitle"

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("getServerSideProps/ssr invoked")
  const tasks = await getTasks()
  const notices = await getNotices()
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Ssr: NextPageWithLayout<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()

  return (
    <>
      <PracticeTitle>SSR</PracticeTitle>
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
    </>
  )
}

Ssr.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
)

export default Ssr
