"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/linkedin-icon.png" alt="Logo" className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-100 dark:bg-zinc-800 text-sm px-3 py-1.5 rounded-md outline-none"
          />
        </div>
        <nav className="flex items-center space-x-6 text-sm">
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7m-9 2v8"
              />
            </svg>
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Home
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5V4H2v16h5m10-14H7m0 6h10m-6 4h2"
              />
            </svg>
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              My Network
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
              />
            </svg>
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Jobs
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 16v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4"
              />
            </svg>
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Messaging
            </span>
          </Link>
          <Link
            href="#"
            className="relative group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405M4 6h16M4 10h16M4 14h10"
              />
            </svg>
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Notifications
            </span>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              11
            </span>
          </Link>
          <div className="relative text-gray-700 dark:text-gray-300">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="group flex flex-col items-center cursor-pointer hover:text-blue-400"
            >
              <img
                src="/avatar-placeholder.png"
                alt="Profile"
                className="w-6 h-6 rounded-full group-hover:ring-2 group-hover:ring-blue-400"
              />
              <span className="flex items-center group-hover:text-blue-400">
                Me
                <svg
                  className="w-3 h-3 ml-1 group-hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4 z-50">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">Musab Bayram</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <button className="w-full text-blue-600 border border-blue-600 rounded-md py-1 text-sm font-medium mb-4 hover:bg-blue-50 dark:hover:bg-zinc-800">
                  View Profile
                </button>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <p className="py-1 border-b dark:border-zinc-700">
                    Premium Features
                  </p>
                  <p className="py-1 border-b dark:border-zinc-700">
                    Settings & Privacy
                  </p>
                  <p className="py-1 border-b dark:border-zinc-700">Help</p>
                  <p className="py-1 border-b dark:border-zinc-700">Language</p>
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300 mt-3 border-t pt-2 dark:border-zinc-700">
                  <p className="py-1 border-b dark:border-zinc-700">
                    Posts & Activity
                  </p>
                  <p className="py-1">Job Posting Account</p>
                </div>
                <button className="mt-3 w-full text-left text-sm text-red-500 hover:underline">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
