"use client";

import Image from "next/image";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    title: "Yazılım Mühendisi: Bursa, Türkiye konumunda 12 fırsat",
    subtitle: "bw",
    action: "İş ilanlarını görüntüle",
    time: "4 saat",
    type: "jobs",
  },
  {
    id: 2,
    title: "Bu hafta 22 aramada göründünüz.",
    subtitle: "linkedinscout",
    action: "",
    time: "4 saat",
    type: "all",
  },
  {
    id: 3,
    title: "React.js: Türkiye konumunda 5 fırsat",
    subtitle: "nerden",
    action: "İş ilanlarını görüntüle",
    time: "4 saat",
    type: "jobs",
  },
  {
    id: 4,
    title: "Node.js geliştiricisi aranıyor.",
    subtitle: "techhire",
    action: "Detayları gör",
    time: "2 saat",
    type: "jobs",
  },
  {
    id: 5,
    title: "Profiliniz 10 yeni kullanıcı tarafından görüntülendi.",
    subtitle: "insights",
    action: "",
    time: "1 saat",
    type: "all",
  },
  {
    id: 6,
    title: "Yeni bağlantı isteği aldınız.",
    subtitle: "network",
    action: "Bağlantıları görüntüle",
    time: "30 dakika",
    type: "apps",
  },
  {
    id: 7,
    title: "Frontend Developer pozisyonu için uygun olabilirsiniz.",
    subtitle: "jobmatch",
    action: "İlanı incele",
    time: "15 dakika",
    type: "apps",
  },
  {
    id: 8,
    title: "Yeni bir yorum aldınız.",
    subtitle: "activity",
    action: "Yorumu oku",
    time: "10 dakika",
    type: "mentions",
  },
  {
    id: 9,
    title: "Yeni bir takipçiniz var.",
    subtitle: "social",
    action: "",
    time: "5 dakika",
    type: "all",
  },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 py-6 md:pt-20">
      <div className="md:w-1/4 mb-6 md:mb-0 md:mr-5">
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/avatar-placeholder.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h2 className="font-semibold mt-2">Musab Bayram</h2>
            <p className="text-sm text-zinc-500">Software Engineer</p>
            <p className="text-sm text-zinc-400 mt-1">İnegöl, Bursa</p>
          </div>
          <button className="mt-4 w-full border border-zinc-500 text-sm py-1.5 rounded">
            Deneyim
          </button>
          <div className="border-t border-zinc-700 mt-4 pt-3 text-sm">
            <a href="#" className="text-blue-500 underline">
              Ayarları görüntüle
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-3/4">
        <div className="flex space-x-3 mb-4">
          <button
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeTab === "all"
                ? "bg-green-600 text-white"
                : "bg-zinc-700 text-white"
            }`}
            onClick={() => setActiveTab("all")}
          >
            Tümü
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeTab === "jobs"
                ? "bg-green-600 text-white"
                : "bg-zinc-700 text-white"
            }`}
            onClick={() => setActiveTab("jobs")}
          >
            İş İlanları
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeTab === "apps"
                ? "bg-green-600 text-white"
                : "bg-zinc-700 text-white"
            }`}
            onClick={() => setActiveTab("apps")}
          >
            Gönderilerim
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeTab === "mentions"
                ? "bg-green-600 text-white"
                : "bg-zinc-700 text-white"
            }`}
            onClick={() => setActiveTab("mentions")}
          >
            Bahsetmeler
          </button>
        </div>

        <div className="space-y-4">
          {notifications
            .filter((note) => activeTab === "all" || note.type === activeTab)
            .map((note) => (
              <div
                key={note.id}
                className="flex items-start bg-zinc-800 p-4 rounded-lg shadow"
              >
                <div className="mr-3">
                  <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full text-[10px] font-bold text-center leading-tight px-1">
                    <span className="block truncate">{note.subtitle}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">{note.title}</p>
                  {note.action && (
                    <button className="mt-2 text-sm px-3 py-1.5 rounded border border-blue-400 text-blue-400">
                      {note.action}
                    </button>
                  )}
                </div>
                <div className="text-xs text-zinc-400 ml-2 whitespace-nowrap">
                  {note.time}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
