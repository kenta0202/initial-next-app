export type TTask = {
  id: number
  title: string
  tag: number
  tag_name: string
  created_at: string
  updated_at: string
}

export type TEditTask = Pick<TTask, "id" | "title" | "tag">

export type TTag = Pick<TTask, "id" | "tag_name">
