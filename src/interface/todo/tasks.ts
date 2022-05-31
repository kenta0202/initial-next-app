// apiサーバーから流すTaskデータの型
export type TTask = {
  id: string
  title: string
  /*   tag: string */
  tag_name: string
  created_at: string
  updated_at: string
}

// グローバルStateの型

// id,title,tag_name
export type TEditTask = Pick<TTask, "id" | "title" | "tag_name">

// id,tag_name
export type TTag = Pick<TTask, "id" | "tag_name">
