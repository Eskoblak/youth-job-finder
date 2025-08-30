const JobCard = ({ job, onSave, isSaved }) => {
  if (!job) return null;

  return (
    <div className="border bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.job_title}</h3>
      <p className="text-gray-600 font-medium">{job.employer_name}</p>
      <p className="text-gray-500 text-sm mb-4">
        {job.job_city}, {job.job_country}
      </p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
        >
          Apply
        </a>
        <button
          onClick={() => onSave(job)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            isSaved ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isSaved ? "Remove" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
