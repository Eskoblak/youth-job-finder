import React from "react";

function JobCard({ job, onSave, saved, isSavedPage }) {
  const buttonText = isSavedPage ? "Remove" : saved ? "Saved" : "Save Job";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 flex justify-between items-center transition hover:shadow-lg">
      
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{job.job_title}</h2>
        <p className="text-sm text-gray-600">{job.employer_name}</p>
        <p className="text-sm text-gray-500">
          {job.job_city}, {job.job_country}
        </p>
        
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block"
        >
          Apply
        </a>
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={() => onSave(job)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors
            ${isSavedPage
              ? "bg-red-500 text-white hover:bg-red-600"
              : saved 
                ? "bg-green-100 text-green-600 hover:bg-green-200 cursor-not-allowed" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300" 
            }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
