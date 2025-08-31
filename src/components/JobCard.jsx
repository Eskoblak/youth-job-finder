function JobCard({ job, onSave, saved }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-4 transition hover:shadow-lg">
      
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800">{job.job_title}</h2>
        <p className="text-sm text-gray-600">{job.employer_name}</p>
        <p className="text-sm text-gray-500">
          {job.job_city}, {job.job_country}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <a
            href={job.job_apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 text-sm font-medium hover:underline"
          >
            Apply
          </a>
        </div>

        <div>
          <button
            onClick={() => onSave(job)}
            className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-colors duration-200
              ${
                saved
                  ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {saved ? "Remove" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;