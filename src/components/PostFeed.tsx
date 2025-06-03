"use client";

import { useEffect, useState } from "react";
import { getBusinessPosts, BusinessPost } from "../lib/api";
import PostModal from "./PostModal";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data.posts;
}

export interface Job {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  publication_date: string;
  salary: string;
  job_type: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  company_logo_url: string;
}

export async function getJobs(): Promise<Job[]> {
  const res = await fetch("https://remotive.io/api/remote-jobs");

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();
  return data.jobs;
}

function PostFeed() {
  const [posts, setPosts] = useState<BusinessPost[]>([]);
  const [localPost, setLocalPost] = useState<BusinessPost | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBusinessPosts();
      setPosts(data);
    }
    fetchPosts();
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      try {
        const parsedPosts = JSON.parse(storedPosts);
        if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
          const latestPost = parsedPosts[0];
          const newLocalPost = {
            id: latestPost.id,
            name: latestPost.author,
            company: "Shared via FocusDay",
            image: "/avatar-placeholder.png",
            headline: latestPost.content,
            date: new Date(latestPost.date).toISOString().split("T")[0],
          };
          setLocalPost(newLocalPost);
        }
      } catch (e) {
        console.error("Failed to parse posts from localStorage", e);
      }
    }
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Business Feed</h2>
      <div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center space-x-4">
          <img
            src="/avatar-placeholder.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover bg-gray-300"
          />
          <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-full py-2 px-4 text-gray-500 dark:text-gray-400">
            Start a post
          </div>
        </div>
        <div className="flex justify-around mt-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="text-green-600">▶</span>
            <span>Video</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">🖼</span>
            <span>Photo</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-600">📄</span>
            <span>Write</span>
          </div>
        </div>
      </div>
      {localPost && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center space-x-4 mb-2">
            <img
              src={localPost.image}
              alt={localPost.name}
              className="w-14 h-14 rounded-full object-cover bg-gray-300"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div>
              <h3 className="text-lg font-semibold">{localPost.name}</h3>
              <p className="text-sm text-gray-500">{localPost.company}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {localPost.headline}
          </p>
          <p className="text-xs text-gray-400 mt-2">{localPost.date}</p>
        </div>
      )}
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={post.image}
                  alt={post.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{post.name}</h3>
                  <p className="text-sm text-gray-500">{post.company}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {post.headline}
              </p>
              <p className="text-xs text-gray-400 mt-2">{post.date}</p>
            </li>
          ))}
        </ul>
      )}
      {showModal && <PostModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default PostFeed;
