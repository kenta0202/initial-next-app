import { useRouter } from "next/router"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import { useStateContext } from "components/practice/other/context/StateProvider"
import PracticeTitle from "components/practice/PracticeTitle"

export const ClassicalFetchB: React.FC = () => {
  const router = useRouter()
  const { tasks } = useStateContext()
  console.log("rendered ClassicalFetchB")
  return (
    <>
      <PracticeTitle>ClassicalFetchB (StateContext)</PracticeTitle>
      <ul className="list-disc">
        {tasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <ChevronDoubleLeftIcon
        onClick={() => {
          void router.push("./fetch-a")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">fetch A</p>
    </>
  )
}
