"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const messages = [
  {
    name: "Sefer Saatchi",
    title: "IT Recruitment Specialist",
    avatar: "/assets/avatars/sefer.png",
    date: "7 Mar",
    content: [
      "Hi Musab, please review the following test link.",
      "https://hire.toggl.com/c/eqeyoj8vv4",
      "Let me know your thoughts.",
    ],
  },
  {
    name: "Amelia Brown",
    title: "HR Coordinator at TechSolutions",
    avatar: "/assets/avatars/amelia.png",
    date: "5 Mar",
    content: [
      "Hi Musab, we reviewed your application.",
      "We're pleased to move you to the next stage.",
    ],
  },
  {
    name: "James Morgan",
    title: "Lead Frontend Engineer",
    avatar: "/assets/avatars/james.png",
    date: "4 Mar",
    content: [
      "Can you take a look at our latest UI draft?",
      "Would love your feedback.",
    ],
  },
  {
    name: "Ava Smith",
    title: "Technical Recruiter - Remote Jobs",
    avatar: "/assets/avatars/ava.png",
    date: "3 Mar",
    content: [
      "Remote opportunity available for you!",
      "Let me know if you're interested.",
    ],
  },
  {
    name: "Liam Johnson",
    title: "Founder at DevStartups",
    avatar: "/assets/avatars/liam.png",
    date: "2 Mar",
    content: ["Thanks for reaching out.", "Let’s schedule a quick call."],
  },
  {
    name: "Emily Davis",
    title: "Product Designer at Appify",
    avatar: "/assets/avatars/emily.png",
    date: "28 Feb",
    content: [
      "Would you like to collaborate on a Figma project?",
      "I admire your work.",
    ],
  },
  {
    name: "Noah Thompson",
    title: "DevOps Engineer at CloudNet",
    avatar: "/assets/avatars/noah.png",
    date: "27 Feb",
    content: ["Deployment process updated.", "See internal repo for details."],
  },
  {
    name: "Sophia Turner",
    title: "Full Stack Developer",
    avatar: "/assets/avatars/sophia.png",
    date: "26 Feb",
    content: ["Check out this repo.", "Let’s sync later this week."],
  },
  {
    name: "William Scott",
    title: "Engineering Manager at CodeBase",
    avatar: "/assets/avatars/william.png",
    date: "25 Feb",
    content: ["Great job on the last sprint!", "Let’s plan the retrospective."],
  },
  {
    name: "Olivia Wilson",
    title: "CTO at Innovatech",
    avatar: "/assets/avatars/olivia.png",
    date: "24 Feb",
    content: ["Excited about our Q3 roadmap.", "Thanks for the feedback."],
  },
];

export default function MessagingPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = messages[selectedIndex];
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSelectedIndex(-1); // or whatever logic you want to close the menu
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen dark:bg-zinc-900 text-white">
      {/* Sidebar */}
      <div ref={sidebarRef}>
        <div className="w-[280px] border-r border-zinc-700 flex flex-col">
          <div className="p-4 font-bold text-lg border-b border-zinc-700">
            Messaging
          </div>
          <input
            type="text"
            placeholder="Search messages"
            className="m-2 px-3 py-2 rounded-md bg-zinc-800 text-sm focus:outline-none"
          />
          <div className="flex gap-2 px-2 mt-2 overflow-x-auto">
            {["All", "Jobs", "Unread", "Connections", "InMail", "Starred"].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-3 py-1 text-xs bg-zinc-800 rounded-full hover:bg-zinc-700"
                >
                  {filter}
                </button>
              )
            )}
          </div>
          <div className="overflow-y-auto mt-3 flex-1 h-full max-h-screen">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-3 border-b border-zinc-800 hover:bg-zinc-800 cursor-pointer ${
                  selectedIndex === i ? "bg-zinc-800" : ""
                }`}
                onClick={() => setSelectedIndex(i)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={msg.avatar}
                    className="w-8 h-8 rounded-full"
                    alt={msg.name}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{msg.name}</div>
                    <div className="text-xs text-zinc-400">{msg.title}</div>
                  </div>
                  <div className="text-xs text-zinc-500">{msg.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {selectedIndex !== -1 && (
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-zinc-700">
            <div className="flex items-center gap-3">
              <img
                src={selected.avatar}
                className="w-10 h-10 rounded-full"
                alt={selected.name}
              />
              <div>
                <div className="font-semibold">{selected.name}</div>
                <div className="text-sm text-zinc-400">{selected.title}</div>
              </div>
              <div className="ml-auto text-xs text-zinc-500">
                {selected.date}
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6 h-full max-h-screen">
            {selected.content.map((text, index) => (
              <div key={index} className="text-sm text-zinc-300">
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-zinc-700 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-md bg-zinc-800 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
