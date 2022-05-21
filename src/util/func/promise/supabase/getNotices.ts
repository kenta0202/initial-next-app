import { Notice } from "interface/supabase/types"
import { supabase } from "util/supabase"

export const getNotices = async () => {

    const { data: notices } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: true })
  return notices as Notice[]
}
