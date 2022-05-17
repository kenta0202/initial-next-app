/* eslint-disable @typescript-eslint/no-unused-vars */
import ReacQueryLayout from "components/general/layout/practice/ReactQueryLayout"
import FetchPerson from "components/practice/reactquery/FetchPerson"
import { IPerson } from "interface/practice/reactquery/IPerson"
import { Suspense } from "react"
import { useQuery, UseQueryResult } from "react-query"

const Person = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPerson />
    </Suspense>
  )
}

Person.getLayout = function getLayout(page) {
  return <ReacQueryLayout>{page}</ReacQueryLayout>
}
export default Person
