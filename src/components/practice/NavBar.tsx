import { navBarDataList, TSampleEnum } from "data/practice/navBarDataList"
import Link from "next/link"

type Props = {
  sampleName: TSampleEnum
}

const NavBar: React.FC<Props> = ({ sampleName }) => {
  const dataFuc = (data: TSampleEnum) => {
    switch (data) {
      case "React18": {
        return navBarDataList.React18
      }
      case "Rendering": {
        return navBarDataList.Rendering
      }
      case "Redux": {
        return navBarDataList.Redux
      }
      case "ReactQuery": {
        return navBarDataList.ReactQuery
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
