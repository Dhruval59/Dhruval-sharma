"use client";  // This marks the file as a client component

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";  // Importing icons from React Icons

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <img src="lucide-sun-icon.svg" size={20} />  // Show Sun icon for Light mode
      ) : (
        <img src="lucide-moon-icon.svg"  size={20} />  // Show Moon icon for Dark mode
      )}
    </button>
  );
}