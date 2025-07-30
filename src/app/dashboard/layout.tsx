"use client";
import { ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={clsx(
          "bg-gray-900 text-white transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className={clsx("text-xl font-bold transition-all", collapsed && "opacity-0 hidden")}>
            Dashboard
          </h2>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white ml-auto"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <a href="/dashboard" className="hover:underline text-sm truncate">Overview</a>
          <a href="/dashboard/analytics" className="hover:underline text-sm truncate">Analytics</a>
          <a href="/dashboard/table" className="hover:underline text-sm truncate">Table</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 dark:bg-gray-950 p-4 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
