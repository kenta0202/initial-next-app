import Layout from "components/general/layout/Layout"
import Link from "next/link"

function IndexPage() {
  return (
    <>
      <h1 className=" text-xl">func D 👋 </h1>
      <Link href={"/sample"}>Sampleへ</Link>
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default IndexPage
