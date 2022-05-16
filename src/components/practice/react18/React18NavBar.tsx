import Link from "next/link"

const React18NavBar = () => {
  return (
    <nav className="w-screen font-mono bg-gray-800">
      <div className="flex items-center pl-4 h-12">
        <div className="flex space-x-1 text-sm">
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/react18">Home</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/react18/autobatch">Auto-batch</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/react18/suspense">Suspense</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/react18/nested_suspense">Nested-Suspense</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/react18/concurrent">startTransition</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default React18NavBar
