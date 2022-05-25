export type TTask = {
  id: number
  title: string
  created_at: string
  updated_at: string
  tag: number
  tag_name: string
}

export const TaskList: TTask[] = [
  {
    id: 1,
    title: "Implement feature",
    created_at: "2021-05-10",
    updated_at: "2021-05-10",
    tag: 1,
    tag_name: "Coding",
  },
  {
    id: 2,
    title: "Unit Test",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag: 2,
    tag_name: "Coding",
  },
]
