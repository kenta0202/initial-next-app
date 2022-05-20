import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import Link from "next/link"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  NavBarElement: ReactNode
}

const PracticeLayout: FC<Props> = ({ children, NavBarElement }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        {NavBarElement}
        <main className="flex flex-col flex-1 justify-center items-center mt-2 w-screen">
          {children}
        </main>
        <div className="cursor-pointer">
          <Link href={"/sample"}>
            <div className=" py-2 px-3  rounded border-whitegrey  hover:opacity-90  ">
              <div className="inline hover:border-b-[1px]">SampleMenu</div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </LayoutErrorBoundary>
  )
}

export default PracticeLayout
