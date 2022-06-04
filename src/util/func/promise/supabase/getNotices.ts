import { Notice } from "interface/supabase/types"
import { supabase } from "util/supabase"

export const getNotices = async () => {
  // Q: 一緒か？ アサーションしてOK?

  /*
returnする変数をアサーションする
・コンパイラの型情報を上書きしているので実行時エラーを起こす恐れがある
・プロパティの追加を忘れても、コンパイラが指摘してくれない。
→赤い波線をだしてくれるtsのパワーが活かせない
  */
  // const { data: notices } = await supabase
  //   .from("notices")
  //   .select("*")
  //   .order("created_at", { ascending: true })
  // return notices as Notice[]

  // ダウンキャスト:型の詳細を指定して絞り込む(アサーション)
  const { data } = (await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: true })) as { data: Notice[] }
  return data
}
