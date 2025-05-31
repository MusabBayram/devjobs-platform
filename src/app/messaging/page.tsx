"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function MessagingPage() {
  const [messages, setMessages] = useState([
    {
      name: "Sefer Saatchi",
      title: "IT Recruitment Specialist",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "7 Mar",
      content: [
        {
          text: "Hi Musab, please review the following test link.",
          sender: "other",
        },
        { text: "https://hire.toggl.com/c/eqeyoj8vv4", sender: "other" },
        { text: "Let me know your thoughts.", sender: "other" },
      ],
    },
    {
      name: "Amelia Brown",
      title: "HR Coordinator at TechSolutions",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "5 Mar",
      content: [
        { text: "Hi Musab, we reviewed your application.", sender: "other" },
        {
          text: "We're pleased to move you to the next stage.",
          sender: "other",
        },
      ],
    },
    {
      name: "James Morgan",
      title: "Lead Frontend Engineer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      date: "4 Mar",
      content: [
        {
          text: "Can you take a look at our latest UI draft?",
          sender: "other",
        },
        { text: "Would love your feedback.", sender: "other" },
      ],
    },
    {
      name: "Ava Smith",
      title: "Technical Recruiter - Remote Jobs",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      date: "3 Mar",
      content: [
        { text: "Remote opportunity available for you!", sender: "other" },
        { text: "Let me know if you're interested.", sender: "other" },
      ],
    },
    {
      name: "Liam Johnson",
      title: "Founder at DevStartups",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      date: "2 Mar",
      content: [
        { text: "Thanks for reaching out.", sender: "other" },
        { text: "Let’s schedule a quick call.", sender: "other" },
      ],
    },
    {
      name: "Emily Davis",
      title: "Product Designer at Appify",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      date: "28 Feb",
      content: [
        {
          text: "Would you like to collaborate on a Figma project?",
          sender: "other",
        },
        { text: "I admire your work.", sender: "other" },
      ],
    },
    {
      name: "Noah Thompson",
      title: "DevOps Engineer at CloudNet",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      date: "27 Feb",
      content: [
        { text: "Deployment process updated.", sender: "other" },
        { text: "See internal repo for details.", sender: "other" },
      ],
    },
    {
      name: "Sophia Turner",
      title: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      date: "26 Feb",
      content: [
        { text: "Check out this repo.", sender: "other" },
        { text: "Let’s sync later this week.", sender: "other" },
      ],
    },
    {
      name: "William Scott",
      title: "Engineering Manager at CodeBase",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      date: "25 Feb",
      content: [
        { text: "Great job on the last sprint!", sender: "other" },
        { text: "Let’s plan the retrospective.", sender: "other" },
      ],
    },
    {
      name: "Olivia Wilson",
      title: "CTO at Innovatech",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      date: "24 Feb",
      content: [
        { text: "Excited about our Q3 roadmap.", sender: "other" },
        { text: "Thanks for the feedback.", sender: "other" },
      ],
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const selected = messages[selectedIndex];
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectedIndex === -1) return;
      const sidebar = sidebarRef.current;
      const chatPanel = document.getElementById("chat-panel");
      if (
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        chatPanel &&
        !chatPanel.contains(event.target as Node)
      ) {
        setSelectedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedIndex]);

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
        <div id="chat-panel" className="flex-1 flex flex-col">
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
              <div
                key={index}
                className={`flex mb-4 ${
                  text.sender === "user" ? "justify-end" : "items-start gap-3"
                }`}
              >
                {text.sender === "user" ? (
                  <div className="flex flex-col items-end">
                    <p className="text-sm text-zinc-300 bg-blue-600 p-3 rounded-lg max-w-lg text-white">
                      {text.text}
                    </p>
                  </div>
                ) : (
                  <>
                    <img
                      src={selected.avatar}
                      alt={selected.name}
                      className="w-8 h-8 rounded-full mt-1"
                    />
                    <div>
                      <div className="text-sm text-white font-semibold">
                        {selected.name}
                      </div>
                      <div className="text-xs text-zinc-400 mb-1">
                        {selected.title}
                      </div>
                      <p className="text-sm text-zinc-300 bg-zinc-800 p-3 rounded-lg max-w-lg">
                        {text.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-zinc-700 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-md bg-zinc-800 focus:outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
              onClick={() => {
                if (!newMessage.trim()) return;
                const updatedMessages = [...messages];
                updatedMessages[selectedIndex].content.push({
                  text: newMessage,
                  sender: "user",
                });
                setNewMessage("");
                setMessages(updatedMessages);
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
