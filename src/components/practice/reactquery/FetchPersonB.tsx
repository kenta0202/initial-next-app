import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import { IPerson } from "interface/practice/reactquery/Person"
import { useQueryClient } from "react-query"
import router from "next/router"

const FetchPersonB = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<IPerson[]>(["person"])
  console.log("render person B")
  return (
    <>
      <table className="table-auto">
        <tr>
          <th className="py-2 px-4 border">No.</th>
          <th className="py-2 px-4 border">名前</th>
          <th className="py-2 px-4 border">年</th>
        </tr>
        {data?.map((v) => {
          return (
            <tr key={v.id}>
              <td className="py-2 px-4  border">{v.id}</td>
              <td className="py-2 px-4 border">{v.name}</td>
              <td className="py-2 px-4  border">{v.age}歳</td>
            </tr>
          )
        })}
      </table>
      <ChevronDoubleLeftIcon
        onClick={() => {
          void router.push("./person")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">PersonA</p>
    </>
  )
}

export default FetchPersonB
