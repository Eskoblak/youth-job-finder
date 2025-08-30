import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Youth Job Finder!
        </h2>

        {/* Using JobCard multiple times */}
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default App;
