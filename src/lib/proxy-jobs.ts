// pages/api/proxy-jobs.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch("https://remotive.io/api/remote-jobs");

    if (!response.ok) {
        return res.status(500).json({ error: "Failed to fetch remote jobs" });
    }

    const data = await response.json();
    res.status(200).json(data);
}

export async function getJobs() {
    const res = await fetch("/api/proxy-jobs");

    if (!res.ok) {
        throw new Error("Failed to fetch jobs");
    }

    const data = await res.json();
    return data.jobs;
}