import { useQueryPage } from "util/hooks/practice/reactquery/useQueryPage"

const FetchPageNation = () => {
  const { isLoading, isError, error, data, isFetching, isPreviousData, page, setPage } =
    useQueryPage()
  return (
    <>
      <div className="">Current Page: {page}</div>
      <div className={` text-center flex flex-col ${isFetching ? "animate-pulse" : ""}  `}>
        {data?.map((post) => (
          <p key={post.id}>
            {post.id}.{post.title}
          </p>
        ))}
      </div>
      <div className="py-12">
        <button
          className="btn"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="btn"
          onClick={() => {
            if (!isPreviousData && data) {
              setPage((old) => old + 1)
            }
          }}
          disabled={isPreviousData || !data}
        >
          Next Page
        </button>
      </div>
    </>
  )
}

export default FetchPageNation
