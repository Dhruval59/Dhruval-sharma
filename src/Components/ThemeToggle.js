"use client";  // This marks the file as a client component
import Image from "next/image";
import { useState, useEffect } from "react";

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
        <Image src="/lucide-sun-icon.svg" width={20} height={20} />  // Show Sun icon for Light mode
      ) : (
        <Image src="/lucide-moon-icon.svg"  width={20} height={20} />  // Show Moon icon for Dark mode
      )}
    </button>
  );
}
