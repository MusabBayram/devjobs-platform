"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          DevJobs
        </Link>
        <nav className="space-x-4">
          <Link
            href="/"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Jobs
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
