// /* eslint-disable @typescript-eslint/no-unsafe-argument */

// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import axios, { AxiosResponse } from "axios"
// import { useQuery } from "react-query"

// type Post = {
//   usedId: number
//   id: string
//   title: string
//   body: string
// }

// const fetchProjects = async (page = 1) => {
//   try {
//     const responce: AxiosResponse<Post[]> = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
//     )

//     const data = responce.data
//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       console.log(error.message)
//     }
//   }
// }

// export const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<
//   Post[],
//   Error
// >(
//   /* ['projects', page], () => fetchProjects(page), {
//   keepPreviousData: true,
// } */
//   {
//     queryKey: [page, "projects"],
//     queryFn: () => fetchProjects(page),
//   }
// )
