import Layout from "components/general/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

function IndexPage() {
  const router = useRouter()

  useEffect(() => {
    void router.push("/sample")
  }, [])

  return (
    <div className="btn">
      <Link href={"/sample"}>Sampleへ</Link>
    </div>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default IndexPage
