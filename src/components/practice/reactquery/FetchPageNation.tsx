import { useQueryPage } from "util/hooks/useQueryPage"

const FetchPageNation = () => {
  const { isLoading, isError, error, data, isFetching, isPreviousData, page, setPage } =
    useQueryPage()
  return (
    <div className="flex flex-col  justify-center items-center w-screen min-h-screen">
      <div
        className={` flex  flex-col items-start justify-start ${isFetching ? "animate-pulse" : ""}`}
      >
        {data?.map((post) => (
          <p key={post.id}>
            {post.id}. {post.title}
          </p>
        ))}
      </div>
      <span className="pt-12">Current Page: {page}</span>
      <div className="py-12">
        <button
          className="p-2 text-white  bg-blue-300 rounded-md"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="p-2 ml-4 text-white  bg-red-300 rounded-md"
          onClick={() => {
            if (!isPreviousData && data) {
              setPage((old) => old + 1)
            }
          }}
          disabled={isPreviousData || !data}
          /* 以前のデータがある、または、データがないとき */
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default FetchPageNation
