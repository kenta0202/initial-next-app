import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import React18NavBar from "components/general/navbar/React18NavBar"
import { FC, ReactNode } from "react"
import RenderingSampleNavBar from "components/general/navbar/RederingSampleNavBar"
import ReduxSampleNavBar from "components/general/navbar/ReduxNavBar"

type Props = {
  children: ReactNode
}

const PracticeLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-600">
        <React18NavBar />
        <RenderingSampleNavBar />
        <ReduxSampleNavBar />
        <main className="flex flex-col flex-1 justify-center items-center w-screen">
          {children}
        </main>
        <Footer />
      </div>
    </LayoutErrorBoundary>
  )
}

export default PracticeLayout
