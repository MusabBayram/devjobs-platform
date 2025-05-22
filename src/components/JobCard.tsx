"use client";

import { Job } from "@/lib/api";

interface Props {
  job: Job;
  onSelect: () => void;
}

export default function JobCard({ job, onSelect }: Props) {
  return (
    <li
      onClick={onSelect}
      className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow hover:bg-zinc-800 cursor-pointer transition"
    >
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-sm text-zinc-400">{job.company_name}</p>
      <p className="text-xs text-zinc-500 mt-1">
        {job.candidate_required_location}
      </p>
    </li>
  );
}
