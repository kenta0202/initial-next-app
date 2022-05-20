import Sppinner from "components/general/Sppinner"
import { Suspense } from "react"
import { useQueryPerson } from "util/hooks/useQueryPerson"

const FetchPerson = () => {
  const { data, status, error } = useQueryPerson()
  return (
    <div>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </div>
  )
}

export default FetchPerson
