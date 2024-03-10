"use client";

import { useState } from "react";
import "./ThemeMode.scss";

export default function ThemeMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button className="ThemeMode" onClick={toggleTheme}>
      {isDarkMode ? "White Mode" : "Dark Mode"}
    </button>
  );
}
