export const getPerson = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person`)
  if (res.ok) {
    return res.json()
  }
  throw new Error("Network responce not ok")
  /* ここで吐き出したエラーをErrorBoundaryで受け取る
    react-queryはerrorをthrowする必要がある
    */
}
