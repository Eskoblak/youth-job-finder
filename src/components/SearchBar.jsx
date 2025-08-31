import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  return (
    <form onSubmit={onSearch} className="flex items-center justify-center p-4">
      <input
        type="text"
        name="search"  
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search jobs (e.g. frontend developer in Nairobi)"
        className="w-2/3 p-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
