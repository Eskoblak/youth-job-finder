// src/components/HeroSection.jsx
export default function HeroSection({ onFindJobs }) {
  const handleClick = () => {
    if (onFindJobs) {
      onFindJobs();
    } else {
      // smooth-scroll to the search area later (when we add it with id="search")
      const el = document.getElementById("search");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 rounded-2xl border bg-white p-8 text-center shadow-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Find your first job with ease
      </h2>
      <p className="mt-2 text-gray-600">
        Search entry-level jobs near you
      </p>

      <button
        onClick={handleClick}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Find Jobs
      </button>
    </section>
  );
}
