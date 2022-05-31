import { TTag, TTask } from "interface/todo/tasks"

// 配列 TaskList
export const TaskList: TTask[] = [
  {
    id: "1",
    title: "Implement feature",
    created_at: "2021-05-10",
    updated_at: "2021-05-10",
    tag_name: "tag1",
  },
  {
    id: "2",
    title: "Unit Test➀",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag_name: "tag2",
  },
  {
    id: "3",
    title: "Unit Test➁",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag_name: "tag3",
  },
]

// オブジェクト Task
// numを引数にしてTaskList配列からオブジェクトを抽出
export const CreateTask = (num: string | number | string[]) => {
  const Task = TaskList.filter((v) => {
    return v.id == num /* numberとstring */
  })

  return { ...Task[0] }
}

// 配列 Tags
// TaskList配列からプロパティを抽出してTag配列を作成
export const Tags: TTag[] = TaskList.map((v) => {
  const newValue = { id: v.id, tag_name: v.tag_name }

  return newValue
})
