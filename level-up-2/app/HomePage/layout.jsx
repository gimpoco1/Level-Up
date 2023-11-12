export default function HomeLayout({ children }) {
  return (
    <html lang="en">
    <body >
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-white shadow-md z-50">
          <a href="/HomePage" className="flex-shrink-0 text-blue-600 hover:text-blue-800">
            <svg className="h-8 w-8" fill="#4edddc" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </a>

          <div className="flex-grow text-center">
            <a href="/HomePage" className="inline-block">
              <img src="/logo1.png" alt="Level Up Logo" className="h-20 md:h-28 inline-block" />
            </a>
          </div>

          <a href="/" className="flex-shrink-0 text-gray-700 hover:text-gray-500">Log Out</a>
        </nav>

        <main className="container mx-auto px-4 mt-8">
          {children}
        </main>
      </body>
  </html>
  )
}
