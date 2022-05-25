import { useRouter } from "next/router"
import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
import { useClassicalFetch } from "util/hooks/practice/other/useClassicalFetch"
import PracticeTitle from "components/practice/PracticeTitle"

export const ClassicalFetchA: React.FC = () => {
  const router = useRouter()
  console.log("rendered ClassicalFetchA")
  const { isLoading, isError, tasks } = useClassicalFetch()
  if (isLoading) return <div>{"Loading..."}</div>
  if (isError) return <div>{"Error"}</div>
  return (
    <>
      <PracticeTitle>ClassicalFetchA (StateContext)</PracticeTitle>
      <ul className="list-disc">
        {tasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <ChevronDoubleRightIcon
        onClick={() => {
          void router.push("./fetch-b")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">fetch B</p>
    </>
  )
}
