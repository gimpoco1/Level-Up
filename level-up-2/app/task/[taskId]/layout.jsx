export default function TaskPageLayout({ children }) {
    return (
     <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-white shadow-md z-50">
      <a href="/HomePage" className="flex-shrink-0 text-blue-600 hover:text-blue-800 pl-4"> 
            <svg className="h-8 w-8" fill="#4edddc" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </a>
  
          <div className="flex-grow text-center pr-1">
              <a href="/HomePage" className="inline-block">
                  <img src="/logo1.png" alt="Level Up Logo" className="h-20 md:h-28 inline-block" />
              </a>
          </div>
  
          <a href="/profile" className="flex-shrink-0 pl-4">
      <svg className="h-8 w-8" fill="#4edddc" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.4-8 4v2h16v-2c0-2.6-5.3-4-8-4z"/>
      </svg>
  </a>
  
      </nav>
  
      <main className="container mx-auto px-4 mt-8">
          {children}
      </main>
  </div>
    )
  }
  