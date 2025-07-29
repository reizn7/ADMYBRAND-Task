// src/app/dashboard/components/Topbar.tsx

"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Topbar() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow dark:shadow-lg p-4 px-6 flex justify-between items-center transition-colors duration-300">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">Welcome back, Sarthak!</div>
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
}
