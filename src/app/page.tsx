"use client";
import { getSearchResults } from "@/services/search";
import { useState } from "react";

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const sR = await getSearchResults(searchWord).then((r: any) => r);
      setResults(sR);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 relative">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-10">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
      )}

      {/* Header */}
      <header className="w-full py-6 bg-blue-600 text-white text-center text-2xl font-semibold shadow-md">
        Web3 Connector Portal
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-12 px-6 sm:px-12">
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Search for Web3 Jobs
          </h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <button
              onClick={fetchResults}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-8">
          <h2 className="text-lg font-semibold mb-4">Job Listings</h2>
          <div className="space-y-4">
            {results.length === 0 ? (
              <p className="text-gray-500">
                No jobs found. Try searching for something else.
              </p>
            ) : (
              results.map((job: any, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition bg-white"
                >
                  <h3 className="text-lg font-bold text-blue-600 hover:underline">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.title}
                    </a>
                  </h3>
                  <p className="text-gray-500 text-sm">{job.displayLink}</p>
                  <p className="text-gray-700 mt-2">{job.snippet}</p>
                  {job.pagemap?.cse_thumbnail && (
                    <img
                      src={job.pagemap.cse_thumbnail[0].src}
                      alt="Job Thumbnail"
                      className="mt-3 w-24 h-24 object-cover rounded-lg"
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-200 text-center text-gray-700">
        &copy; {new Date().getFullYear()} Web3 Connector. All rights reserved.
      </footer>
    </div>
  );
}
