import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import SavedJobs from "./components/SavedJobs";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState(() => {
    const stored = localStorage.getItem("savedJobs");
    return stored ? JSON.parse(stored) : [];
  });
  const [query, setQuery] = useState("developer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  const searchJobs = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements.search.value;
    if (newQuery.trim()) setQuery(newQuery);
  };

  const handleSaveJob = (job) => {
    let updatedJobs;
    if (savedJobs.some((j) => j.job_id === job.job_id)) {
      updatedJobs = savedJobs.filter((j) => j.job_id !== job.job_id);
    } else {
      updatedJobs = [...savedJobs, job];
    }
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://jsearch.p.rapidapi.com/search?query=${query}&num_pages=1`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
              "x-rapidapi-host": "jsearch.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(data.data || []);
      } catch (err) {
        setError("Unable to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchJobs();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" ? (
        <>
          <HeroSection />
          <SearchBar onSearch={searchJobs} />
          <JobList
            jobs={jobs}
            onSave={handleSaveJob}
            savedJobs={savedJobs}
            loading={loading}
            error={error}
          />
        </>
      ) : (
        <SavedJobs savedJobs={savedJobs} onSave={handleSaveJob} />
      )}
    </div>
  );
};

export default App;
