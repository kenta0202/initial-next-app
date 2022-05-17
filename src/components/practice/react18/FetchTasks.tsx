import { useQueryTasks } from "util/hooks/practice/react18/useQueryTasks"

const FetchTasks = () => {
  const { /* status, */ data } = useQueryTasks()
  //   if (status === "loading") return <p>Loading...</p>;
  //   if (status === "error") return <p>Error</p>;
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data.map((task) => (
        <p className="my-3 text-sm" key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  )
}

export default FetchTasks
