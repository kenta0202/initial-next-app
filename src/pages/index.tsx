import Layout from "components/general/layout/Layout"
import Count from "pages/sample/redux/Count"

function IndexPage() {
  return (
    <>
      <h1 className=" text-xl">func D 👋 </h1>
      <Count />
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default IndexPage
