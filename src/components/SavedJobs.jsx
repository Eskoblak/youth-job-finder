import JobCard from "./JobCard";

const SavedJobs = ({ savedJobs, onSave }) => (
  <aside className="max-w-6xl mx-auto p-6 md:p-12">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Saved Jobs</h2>
    {savedJobs.length === 0 ? (
      <p className="text-center text-gray-600">You haven't saved any jobs yet.</p>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedJobs.map((job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onSave={onSave}
            isSaved={true}
          />
        ))}
      </div>
    )}
  </aside>
);

export default SavedJobs;
