import Link from "next/link"

// インデックスシグネチャ：オブジェクトの型を一律で制約
type Props = {
  [k: string]: string
}

const NavBarData: React.FC<Props> = ({ dir, linkName, pathname }) => {
  const isAcitve = pathname === `/sample/${dir}`
  return (
    <div className={`text-center  m-1 flex-1 py-3 px-4 cursor-pointer`} key={linkName}>
      <div
        className={` border-whitegrey hover:opacity-90 hover:border-b-2 inline ${
          isAcitve ? " border-b-2 font-bold" : ""
        } `}
      >
        <Link href={`/sample/${dir}`}>{linkName}</Link>
      </div>
    </div>
  )
}

export default NavBarData
