"use client";

export default function RightSidebar() {
  return (
    <aside className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
        What's new
      </h3>
      <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
        <li>🔍 AI tools are transforming hiring</li>
        <li>📈 Tech jobs rise globally</li>
        <li>💡 Startups getting smarter</li>
      </ul>
    </aside>
  );
}
