import { TTag, TTask } from "interface/todo/tasks"

// 配列 TaskList
export const TaskList: TTask[] = [
  {
    id: "1",
    title: "1000足歩く",
    created_at: "2021-05-10",
    updated_at: "2021-05-10",
    tag_name: "健康",
  },
  {
    id: "2",
    title: "歯磨きをする",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag_name: "清潔",
  },
  {
    id: "3",
    title: "食べ過ぎない",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag_name: "健康",
  },
  {
    id: "4",
    title: "一日一時間勉強する",
    created_at: "2021-05-13",
    updated_at: "2021-05-13",
    tag_name: "学習",
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
  return [{ id: v.id, tag_name: v.tag_name }]
})
  .flat()
  .filter(
    (x, i, array) =>
      array.findIndex((y) => y.tag_name === x.tag_name && y.tag_name === x.tag_name) === i
  )

export const CreateTag = (num: string | number | string[]) => {
  const Tag = Tags.filter((v) => {
    return v.id == num /* numberとstring */
  })

  return { ...Tag[0] }
}
