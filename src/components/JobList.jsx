import React from "react";
import JobCard from "./JobCard"; 

function JobList({ jobs, onSave, savedJobs }) {
  return (
    <div className="mt-6">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onSave={onSave}
            saved={savedJobs.some((savedJob) => savedJob.job_id === job.job_id)}
          />
        ))
      ) : (
        <p className="text-gray-500">No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
