import Sppinner from "components/general/Sppinner"
import { Suspense } from "react"
import { useQueryPersonById } from "util/hooks/useQueryPersonById"

const FetchPersonById = () => {
  const { data } = useQueryPersonById()
  return (
    <Suspense fallback={<Sppinner />}>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </Suspense>
  )
}

export default FetchPersonById
