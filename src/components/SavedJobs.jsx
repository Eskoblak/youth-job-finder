import React from "react";
import JobCard from "./JobCard";

function SavedJobs({ savedJobs, onSave }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
      {savedJobs.length > 0 ? (
        savedJobs.map((job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onSave={onSave}
            saved={true}          
            isSavedPage={true}    
          />
        ))
      ) : (
        <p className="text-gray-500">No saved jobs yet.</p>
      )}
    </div>
  );
}

export default SavedJobs;
