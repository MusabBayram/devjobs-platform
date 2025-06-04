"use client";

import { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface PostModalProps {
  onClose: () => void;
}

export default function PostModal({ onClose }: PostModalProps) {
  const [content, setContent] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-10 overflow-y-auto bg-black md:bg-black/60">
      <div
        ref={modalRef}
        className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold dark:text-white">Share</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Image
              src="/avatar-placeholder.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold dark:text-white">
                Musab Bayram
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Public</p>
            </div>
          </div>
          <textarea
            className="w-full p-2 rounded border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 text-sm dark:text-white"
            placeholder="Share your thoughts. Add a photo or hashtag."
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex space-x-4 mt-4 text-gray-500 dark:text-gray-400">
            <span className="text-xl">📷</span>
            <span className="text-xl">@</span>
            <span className="text-xl">#</span>
          </div>
          <button
            className={`mt-4 w-full py-2 rounded ${
              content.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!content.trim()}
            onClick={() => {
              if (content.trim()) {
                const posts = JSON.parse(localStorage.getItem("posts") || "[]");
                posts.unshift({
                  id: Date.now(),
                  content,
                  author: "Musab Bayram",
                  date: new Date().toISOString(),
                });
                localStorage.setItem("posts", JSON.stringify(posts));
                setContent("");
                onClose();
              }
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
