import JobCard from "./JobCard";

const JobList = ({ jobs, onSave, savedJobs, loading, error }) => (
  <section className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Jobs</h2>
    {loading && <p className="text-center text-gray-600">Loading jobs...</p>}
    {error && <p className="text-center text-red-500">{error}</p>}
    {!loading && jobs.length === 0 && (
      <p className="text-center text-gray-600">No jobs found. Try a different search.</p>
    )}
    {!loading && jobs.length > 0 && (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onSave={onSave}
            isSaved={savedJobs.some((j) => j.job_id === job.job_id)}
          />
        ))}
      </div>
    )}
  </section>
);

export default JobList;
