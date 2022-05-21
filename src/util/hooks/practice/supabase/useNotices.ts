import { Notice } from "interface/supabase/types"
import { useState } from "react"
import { supabase } from "util/supabase"

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>()

  const getNotices = async () => {
    const { data: notices } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: true })
    setNotices(notices)
  }
  return { notices, getNotices }
}
