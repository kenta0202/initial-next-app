import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
import router from "next/router"
import { useQueryPerson } from "util/hooks/practice/reactquery/useQueryPerson"

const FetchPersonA = () => {
  /* ■利点
   ・レンダリング回数の最適化
    レンダリングマウント時のLoadingAnimationをレンダリング時とデータのレンダリング時の計2回レンダリング
   ・キャッシュによるFetch回数の最適化
   ・BetterUX
    2 回目以降にマウントをした場合、まず staledata を返す。staleの場合はその間に fetch して最新の Data を入手
    最新にデータが入手でき次第、最新のデータを返す。→2 回目以降は Loading...が表示されない

*/
  const { data /* , status, error */ } = useQueryPerson()
  console.log("render person A")
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
      <ChevronDoubleRightIcon
        onClick={() => {
          void router.push("./personB")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">PersonB</p>
    </>
  )
}

export default FetchPersonA
