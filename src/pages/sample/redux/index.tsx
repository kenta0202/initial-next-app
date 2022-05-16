import ReduxLayout from "components/general/layout/practice/ReduxLayout"

const ReduxHome = () => {
  return <div>ReduxHome</div>
}

ReduxHome.getLayout = function getLayout(page) {
  return <ReduxLayout>{page}</ReduxLayout>
}

export default ReduxHome
