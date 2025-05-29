"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const users = [
  {
    id: 1,
    name: "Serhat Şahin",
    title: "Jr. Software Developer",
    mutual: "Damla Erva ve 11 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Mehmet Gökmen",
    title: "Flutter Developer",
    mutual: "Hakkı ve 14 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Furkan Mert Partal",
    title: "Software Developer",
    mutual: "Musluhan ve 14 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Deniz Artun Aydın",
    title: "Web & Mobile Developer | TypeScript & React",
    mutual: "Bilun ve 23 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Doğan Esen",
    title: "Computer Engineer | Frontend Developer",
    mutual: "Hatice ve 19 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Ozan Zorlu",
    title: "Frontend Developer",
    mutual: "Musluhan ve 12 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Ayberk Gerey",
    title: "Software Developer",
    mutual: "Kürşat ve 3 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Zahide Karadoğan",
    title: "Flutter Developer",
    mutual: "Haluk Can ve 6 diğer ortak bağlantı",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export default function MyNetworkPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex p-4 max-w-screen-xl mx-auto md:pt-16">
      <div className="hidden md:block w-1/4 pr-4">
        <div
          className="bg-zinc-900 p-4 rounded-lg text-zinc-100 space-y-4"
          ref={menuRef}
        >
          <h2 className="text-lg font-semibold">Manage my network</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>👥</span> Connections
              </span>
              <span>743</span>
            </li>
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>📖</span> Contacts
              </span>
              <span>183</span>
            </li>
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>👤</span> Following & Followers
              </span>
            </li>
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>👥</span> Groups
              </span>
              <span>1</span>
            </li>
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>📅</span> Events
              </span>
              <span>5</span>
            </li>
            <li className="flex justify-between items-center border-b border-zinc-700 pb-2">
              <span className="flex items-center gap-2">
                <span>📄</span> Pages
              </span>
              <span>368</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span>📰</span> Newsletters
              </span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">People you may know</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-zinc-800 p-4 rounded-lg shadow flex flex-col justify-between text-center border border-zinc-700 hover:shadow-lg transition h-full"
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border border-gray-500"
                />
                <h3 className="font-semibold mt-2">{user.name}</h3>
                <p className="text-sm text-zinc-400">{user.title}</p>
                <p className="text-xs text-zinc-500 mt-1">{user.mutual}</p>
              </div>
              <button className="w-full mt-2 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
