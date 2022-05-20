export type IPerson = {
  id: string
  name: string
  age: number
}

// Mutationデータの型
export type ICreatePersonParams = {
  id: string
  name: string
  age: number
}

// エラーのときに表示されるテキストの型
export type IContext = {
  id: string
}
