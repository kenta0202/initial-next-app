import Link from "next/link"

const ReactQueryNavBar = () => {
  return (
    <nav className="w-screen font-mono bg-gray-800">
      <div className="flex items-center pl-4 h-12">
        <div className="flex items-center space-x-1 text-sm">
          <div className="py-2 px-3 text-base text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/reactquery">ReactQuery</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/reactquery/pagenation">PageNation</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/reactquery/person">Person</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/reactquery/person/33">Person/33</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ReactQueryNavBar
