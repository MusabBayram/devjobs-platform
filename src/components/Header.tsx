"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  PlusCircleIcon,
  BellIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 shadow-md py-2 px-4">
      <div className="flex items-center justify-between md:hidden">
        <Link href="/profile">
          <img
            src="/avatar-placeholder.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-100 dark:bg-zinc-800 text-sm px-3 py-1.5 rounded-md outline-none flex-1 mx-3"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-zinc-600 dark:text-zinc-300"
          >
            <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H6l-4 4V5z" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center">
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
            <HomeIcon className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Home
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <UsersIcon className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              My Network
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <BriefcaseIcon className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Jobs
            </span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Messaging
            </span>
          </Link>
          <Link
            href="#"
            className="relative group flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <BellIcon className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
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
