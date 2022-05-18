/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TNavBarList, TSampleEnum } from "data/navBarDataList"
import Link from "next/link"

type Props = {
  dataList: TNavBarList
  sampleName: TSampleEnum
}

const NavBar: React.FC<Props> = ({ dataList, sampleName }) => {
  const { Redux, Rendering, ReactQuery, React18 } = dataList

  const dataFuc = (data: TSampleEnum) => {
    switch (data) {
      case "React18": {
        return React18
      }
      case "Rendering": {
        return Rendering
      }
      case "Redux": {
        return Redux
      }
      case "ReactQuery": {
        return ReactQuery
      }
      default: // it depends
        throw new Error()
    }
  }

  return (
    <nav className="w-screen font-mono bg-gray-800">
      <div className="flex items-center pl-4 h-12">
        <div className="flex items-center space-x-1 text-sm">
          {dataFuc(sampleName).map((data) => (
            <div
              className="py-2 px-3 text-base text-gray-300 hover:bg-gray-700 rounded"
              key={data.linkName}
            >
              <Link href={`/sample/${data.dir}`}>{data.linkName}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
