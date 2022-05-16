import Link from "next/link"

const RenderingSampleNavBar = () => {
  return (
    <nav className="w-screen font-mono bg-gray-800">
      <div className="flex items-center pl-4 h-12">
        <div className="flex space-x-1 text-sm">
          <div className="py-2 px-3 text-base text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/rendering">Rendering</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/rendering/csr">CSR</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/rendering/isr">ISR</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/rendering/ssg">SSG</Link>
          </div>
          <div className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
            <Link href="/sample/rendering/ssr">SSR</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default RenderingSampleNavBar
