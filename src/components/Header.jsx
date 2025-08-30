const Header = ({ currentPage, setCurrentPage }) => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Youth Job Finder</h1>
      <nav className="flex space-x-8">
        <button
          onClick={() => setCurrentPage('home')}
          className={`font-medium ${currentPage === 'home' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('saved')}
          className={`font-medium ${currentPage === 'saved' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Saved Jobs
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
