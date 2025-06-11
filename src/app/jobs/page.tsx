/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
// import { getJobs } from "@/lib/api";
import { getNewJobs as getJobs } from "@/lib/api";
import { Job } from "@/lib/api";
import JobCard from "@/components/JobCard";

export default function JobsPageWrapper() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(jobs);

  useEffect(() => {
    async function fetchJobs() {
      const jobData = await getJobs();

      setJobs(jobData);
    }
    fetchJobs();
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-7xl mx-auto h-[calc(100vh-80px)] md:pt-20 ${
          isModalOpen ? "" : "pt-10"
        }`}
      >
        <div className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900">
          <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                onSelect={() => {
                  setSelectedJob(job);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </ul>
        </div>
        <div className="hidden md:block p-4 bg-zinc-800 rounded-lg shadow-inner overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900">
          {selectedJob ? (
            <div>
              <div className="flex items-center space-x-4 pb-2">
                {selectedJob.url ? (
                  <img
                    src={`https://logo.clearbit.com/${
                      new URL(selectedJob.url).hostname
                    }`}
                    alt={selectedJob.company_name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-zinc-600 text-white flex items-center justify-center font-bold">
                    {selectedJob.company_name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2">
                  {selectedJob.title}
                </h2>
              </div>
              <p className="text-sm text-zinc-400 mb-2">
                {selectedJob.company_name} •{" "}
                {selectedJob.candidate_required_location}
              </p>
              <p className="text-sm text-zinc-500 mb-2">
                {selectedJob.salary || "Salary not specified"}
              </p>
              <a
                href={selectedJob.url}
                target="_blank"
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                Apply Now
              </a>
              <div
                className="mt-4 text-sm text-zinc-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              />
            </div>
          ) : (
            <p className="text-zinc-300 text-sm text-center">
              Select a job to see details
            </p>
          )}
        </div>
      </div>
      {/* Modal for mobile */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-end md:hidden pb-14">
          <div className="bg-zinc-800 w-full h-full rounded-t-lg p-4 overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-right text-sm text-blue-400 hover:underline block w-full mb-2"
            >
              Close
            </button>
            <div className="flex items-center space-x-4 pb-2">
              {selectedJob.url ? (
                <img
                  src={`https://logo.clearbit.com/${
                    new URL(selectedJob.url).hostname
                  }`}
                  alt={selectedJob.company_name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-zinc-600 text-white flex items-center justify-center font-bold">
                  {selectedJob.company_name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2">
                {selectedJob.title}
              </h2>
            </div>
            <p className="text-sm text-zinc-400 mb-2">
              {selectedJob.company_name} •{" "}
              {selectedJob.candidate_required_location}
            </p>
            <p className="text-sm text-zinc-500 mb-2">
              {selectedJob.salary || "Salary not specified"}
            </p>
            <a
              href={selectedJob.url}
              target="_blank"
              className="inline-block mt-2 text-blue-500 hover:underline"
            >
              Apply Now
            </a>
            <div
              className="mt-4 text-sm text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedJob.description }}
            />
          </div>
        </div>
      )}
    </>
  );
}
