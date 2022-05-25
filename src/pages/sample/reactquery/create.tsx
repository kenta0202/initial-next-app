/* eslint-disable @typescript-eslint/no-misused-promises */
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import Sppinner from "components/general/Sppinner"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import FetchPersonA from "components/practice/reactquery/FetchPersonA"
import React, { FormEventHandler, Suspense, useState } from "react"
import { QueryClient, useQueryClient } from "react-query"
import { useMutationCreatePerson } from "util/hooks/practice/reactquery/useMutationCreatePerson"

const Mutations = () => {
  const mutation = useMutationCreatePerson()
  // const queryClient = new QueryClient()

  // const [enabled, setEnabled] = useState(false)

  const onSubmit: FormEventHandler<HTMLFormElement> = (event: React.SyntheticEvent) => {
    void event.preventDefault()
    // Q: ここの文法
    const target = event.target as typeof event.target & {
      name: { value: string }
      age: { value: number }
    }
    const id = "1"
    const name = target.name.value
    const age = target.age.value
    void mutation.mutate({ id, name, age })
  }

  return (
    <>
      <PracticeTitle>Create PersonData</PracticeTitle>
      {mutation.isLoading ? (
        <p>Adding todo</p>
      ) : (
        <>
          {mutation.isError ? <div>An error occurred :{mutation?.error?.message}</div> : null}
          {mutation.isSuccess ? (
            <div>
              Person added! Person name is {mutation?.data?.name} and he is {mutation?.data?.age}
            </div>
          ) : null}
        </>
      )}

      {/* <button
        className=""
        onClick={() => {
          setEnabled(!enabled)
          void queryClient.invalidateQueries(["person"])
        }}
      >
        Invalidate Cache
      </button> */}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" className=" text-darkgrey" />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" className=" text-darkgrey" />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <Suspense fallback={<Sppinner />}>
        <FetchPersonA />
      </Suspense>
    </>
  )
}

Mutations.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)
export default Mutations
