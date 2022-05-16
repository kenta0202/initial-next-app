import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import { FC, ReactNode } from "react"
import RenderingSampleNavBar from "components/general/navbar/RederingSampleNavBar"
import Link from "next/link"

type Props = {
  children: ReactNode
}

const RenderingLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-600">
        <RenderingSampleNavBar />
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

export default RenderingLayout
