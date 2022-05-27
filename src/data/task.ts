import { TTag, TTask } from "interface/todo/tasks"

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
    title: "Unit Test➀",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag: 2,
    tag_name: "Coding",
  },
  {
    id: 3,
    title: "Unit Test➁",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag: 3,
    tag_name: "Coding",
  },
]

export const Tags: TTag[] = TaskList.map((v) => {
  const newValue = { id: v.id, tag_name: v.tag_name }

  return newValue
})