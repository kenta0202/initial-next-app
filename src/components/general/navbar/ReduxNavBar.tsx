import Link from "next/link"

const ReduxSampleNavBar = () => {
  return (
    <nav className="w-screen font-mono bg-gray-800">
      <div className="flex items-center pl-4 h-12">
        <div className="flex space-x-1 text-sm">
          <div className="py-2 px-3 text-base text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/redux">ReduxHome</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/redux/count">Count</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/redux/todo">Todo</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ReduxSampleNavBar
