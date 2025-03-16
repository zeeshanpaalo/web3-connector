"use client";
// import Image from "next/image";
import { getSearchResults } from "@/services/search";
import { useState } from "react";

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    // get results
    getSearchResults(searchWord)
      .then((sR: any) => {
        // console.log(sR[0]);
        // console.log(sR[0].pagemap);
        setResults(sR);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <div className="gcse-search"></div> */}
        <h1>Web3 Connector Portal</h1>
        <input
          type="text"
          placeholder="Search jobs"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        ></input>
        <button onClick={() => fetchResults()}>search</button>
        <div className="p-4 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
          <div className="space-y-4">
            {results.map((job: any, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {job.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm">{job.displayLink}</p>
                <p className="text-gray-800 mt-2">{job.snippet}</p>
                <img
                  src={job.pagemap.cse_thumbnail[0].src}
                  width={"100px"}
                  height={"100px"}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Web3 Connector
      </footer>
    </div>
  );
}
