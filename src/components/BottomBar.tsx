"use client";

import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  PlusCircleIcon,
  BellIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import PostModal from "./PostModal";
import { useState } from "react";

export default function BottomBar() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  return (
    <>
      {isPostModalOpen && (
        <PostModal onClose={() => setIsPostModalOpen(false)} />
      )}
      <nav className="sticky bottom-0 left-0 mt-6 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 flex justify-around items-center py-2 z-50 md:hidden">
        <Link
          href="#"
          className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300"
        >
          <HomeIcon className="h-6 w-6" />
          <span>Home</span>
        </Link>
        <Link
          href="/mynetwork"
          className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300"
        >
          <UsersIcon className="h-6 w-6" />
          <span>My Network</span>
        </Link>
        <button
          onClick={() => setIsPostModalOpen(true)}
          className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300"
        >
          <PlusCircleIcon className="h-6 w-6" />
          <span>Post</span>
        </button>
        <Link
          href="/notifications"
          className="relative flex flex-col items-center text-xs text-gray-700 dark:text-gray-300"
        >
          <BellIcon className="h-6 w-6" />
          <span>Notifications</span>
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] rounded-full px-1">
            9
          </span>
        </Link>
        <Link
          href="/jobs"
          className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300"
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span>Jobs</span>
        </Link>
      </nav>
    </>
  );
}
