"use client";

import Image from "next/image";

export default function SidebarProfile() {
  return (
    <aside className="bg-white dark:bg-zinc-900 rounded-lg p-4 w-full max-w-xs shadow-md">
      <div className="flex flex-col items-center">
        <Image
          src="/avatar-placeholder.png"
          alt="Profile"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
        />
        <h2 className="text-lg font-semibold mt-2 text-center text-zinc-800 dark:text-zinc-100">
          Musab Bayram
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
          Software Engineer
        </p>
      </div>
      <div className="mt-4 border-t border-gray-200 dark:border-zinc-700 pt-4">
        <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>Profile views</span>
          <span className="font-medium text-blue-500">34</span>
        </div>
        <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          <span>Post impressions</span>
          <span className="font-medium text-blue-500">2</span>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white text-sm font-medium py-1.5 rounded hover:bg-blue-700">
          Try Premium for Free
        </button>
      </div>
    </aside>
  );
}
