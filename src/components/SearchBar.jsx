const SearchBar = ({ onSearch }) => (
  <div className="p-6 md:p-12">
    <form onSubmit={onSearch} className="max-w-xl mx-auto mb-12 relative flex items-center">
      <input
        type="search"
        name="search"
        placeholder="Search by title, skill, or location"
        className="w-full pl-6 pr-16 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </form>
  </div>
);

export default SearchBar;
