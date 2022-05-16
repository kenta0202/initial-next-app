import RenderingLayout from "components/general/layout/practice/RenderingLayout"

const RenderingHome = () => {
  return <div>index</div>
}

RenderingHome.getLayout = function getLayout(page) {
  return <RenderingLayout>{page}</RenderingLayout>
}

export default RenderingHome
