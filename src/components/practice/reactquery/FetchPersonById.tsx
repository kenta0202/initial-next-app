import Sppinner from "components/general/Sppinner"
import { Suspense } from "react"
import { useQueryPersonById } from "util/hooks/practice/reactquery/useQueryPersonById"

const FetchPersonById = () => {
  const { data } = useQueryPersonById()
  return (
    <>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </>
  )
}

export default FetchPersonById
