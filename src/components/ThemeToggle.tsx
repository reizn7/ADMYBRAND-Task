"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") ?? "light";
    setIsDark(initialTheme === "dark");
    root.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    const newTheme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border bg-card text-card-foreground shadow hover:bg-primary hover:text-primary-foreground transition"
    >
      {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
