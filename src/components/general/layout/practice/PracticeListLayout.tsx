import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import { FC, ReactNode } from "react"
import NavBar from "components/practice/common/NavBar"

type Props = {
  children: ReactNode
}

const PracticeListLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <NavBar sampleName={"Hooks"} />
        <NavBar sampleName={"Redux"} />
        <NavBar sampleName={"Rendering"} />
        <NavBar sampleName={"React18"} />
        <NavBar sampleName={"ReactQuery"} />
        <NavBar sampleName={"Other"} />
        <main className="flex flex-col flex-1 justify-center items-center w-screen">
          {children}
        </main>
        <Footer />
      </div>
    </LayoutErrorBoundary>
  )
}

export default PracticeListLayout
