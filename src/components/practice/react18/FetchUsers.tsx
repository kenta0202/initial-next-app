import { useQueryUsers } from "util/hooks/practice/react18/useQueryUsers"

const FetchUsers = () => {
  const { /* status, */ data } = useQueryUsers()
  //   if (status === "loading") return <p>Loading...</p>;
  //   if (status === "error") return <p>Error</p>;
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data.map((user) => (
        <p className="my-3 " key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}

export default FetchUsers
