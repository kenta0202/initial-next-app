import { useQueryComments } from "util/hooks/practice/react18/useQueryComments"

const FetchComments = () => {
  const { /* status, */ data: tasks = [] } = useQueryComments()
  // dataをtasksに展開(値がなかったときにそなえてデフォルト値を設定したい。)
  //   if (status === "loading") return <p>Loading...</p>;
  //   if (status === "error") return <p>Error</p>;
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Comments List</p>
      {tasks.map((comment) => (
        <p className="my-3 text-sm" key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  )
}

export default FetchComments
