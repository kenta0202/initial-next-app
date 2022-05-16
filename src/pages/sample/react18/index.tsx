import React18Layout from "components/general/layout/practice/React18Layout"

const React18 = () => {
  return <div>React18 basic lesson</div>
}

React18.getLayout = function getLayout(page) {
  return <React18Layout>{page}</React18Layout>
}

export default React18
