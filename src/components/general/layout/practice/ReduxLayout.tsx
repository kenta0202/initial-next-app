import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import ReduxSampleNavBar from "components/general/navbar/ReduxNavBar"
import Link from "next/link"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

const ReduxLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-600">
        <ReduxSampleNavBar />

        <main className="flex flex-col flex-1 justify-center items-center w-screen">
          {children}
        </main>
        <Link href={"/sample"}>
          <div className="py-2 px-3 text-sm text-gray-300 hover:bg-gray-700 rounded">
            SampleMenu
          </div>
        </Link>
        <Footer />
      </div>
    </LayoutErrorBoundary>
  )
}

export default ReduxLayout
