import { useQueryComments } from "util/hooks/useQueryComments";

const FetchTasks = () => {
  const { /* status, */ data } = useQueryComments();
  //   if (status === "loading") return <p>Loading...</p>;
  //   if (status === "error") return <p>Error</p>;
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Comments List</p>
      {data?.map((comment) => (
        <p className="my-3 text-sm" key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  );
};

export default FetchTasks;
