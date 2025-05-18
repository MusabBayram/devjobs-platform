"use client";

import { useEffect, useState } from "react";
import { getBusinessPosts, BusinessPost } from "../lib/api";

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

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBusinessPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Business Feed</h2>
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
    </div>
  );
}

export default PostFeed;
