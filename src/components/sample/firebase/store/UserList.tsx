import useGetUsers from "util/hooks/firebase/useGetUsers";

const UserList = () => {
  const users = useGetUsers();

  return (
    <>
      <h3 className=" text-2xl">
        <span className="text-lg">■</span> Store
      </h3>
      <div className=" m-4">
        {users.map((user) => (
          <ul key={user.id} className="m-2 list-disc ">
            <li>{user.admin ? "admin" : "adminではない"}</li>
            <li>{user.name}</li>
            <li>{user.age}歳</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default UserList;
