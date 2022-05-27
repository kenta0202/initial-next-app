import { IContext, ICreatePersonParams, IPerson } from "interface/practice/reactquery/Person"
import { useMutation, UseMutationResult, useQueryClient } from "react-query"
import { createPerson } from "util/func/promise/internal-api/createPerson"

// contextの型

export const useMutationCreatePerson = () => {
  const queryClient = useQueryClient()
  const mutation: UseMutationResult<IPerson, Error, IPerson> = useMutation<
    IPerson /* もらうデータ */,
    Error,
    ICreatePersonParams /*変異データ(variables)の型 */,
    IContext | undefined /*Contextをもとに副作用にアクセス  */
  >(
    // 第一引数はKey
    ["createPerson"],
    // 第二引数はPromise関数
    //  void mutation.mutate({ id, name, age })から受け取った引数
    async ({ id, name, age }) => createPerson(id, name, age),
    /* 第三引数は副作用 オブジェクト */
    {
      // before mutation variablesを返す
      onMutate: (variables) => {
        console.log("mutaion variables", variables)
        return { id: "7" }
      },
      // on success of mutation
      onSuccess: async (data) => {
        /* クエリの無効化 */
        console.log("mutation data", data)
        // Q: うまく動かない
        await queryClient.invalidateQueries(["person"])
      },
      // if mutation errors
      onError: (error, context) => {
        console.log("error", error.message)
        console.log(`rolling back optimistic update with id:${context?.id}`)
      },
      // no mattter if error or success run me
      onSettled: () => {
        console.log("complete mutation")
      },
    }
  )

  return mutation
}
