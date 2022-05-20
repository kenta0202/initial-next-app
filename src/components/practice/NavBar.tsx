import { navBarDataList, TSampleEnum } from "data/practice/navBarDataList"
import NavBarData from "components/practice/NavBarData"
import { useRouter } from "next/router"

type Props = {
  sampleName: TSampleEnum
}

const NavBar: React.FC<Props> = ({ sampleName }) => {
  // 変数：sampleName、返り値：配列
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

  const { pathname } = useRouter()

  return (
    <nav className=" flex overflow-x-scroll sticky top-0 z-10   flex-row grow-0 items-center space-x-2 w-screen  font-mono   whitespace-nowrap bg-darkgrey hidden-scrollbar ">
      {dataFuc(sampleName).map((data) => (
        <NavBarData
          linkName={data.linkName}
          dir={data.dir}
          key={data.linkName}
          pathname={pathname}
        />
      ))}
    </nav>
  )
}

export default NavBar
