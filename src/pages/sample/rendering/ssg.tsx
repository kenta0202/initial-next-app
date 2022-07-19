/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import { Task, Notice } from "interface/supabase/types"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import { NextPageWithLayout } from "interface/general"
import { getNotices } from "util/func/promise/supabase/getNotices"
import { getTasks } from "util/func/promise/supabase/getTasks"
import PracticeTitle from "components/practice/common/PracticeTitle"

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps/ssg invoked")
  const tasks = await getTasks()
  const notices = await getNotices()
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Ssg: NextPageWithLayout<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()

  return (
    <>
      <PracticeTitle>SSG</PracticeTitle>
      <ul className="mb-3">
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
    </>
  )
}

Ssg.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
)

export default Ssg
