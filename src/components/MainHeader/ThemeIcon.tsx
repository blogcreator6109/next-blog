"use client";

import { useEffect, useMemo, useState } from "react";
import "./ThemeIcon.scss";

export default function ThemeIcon() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = useMemo(() => {
    return () => {
      if (document) {
        document.documentElement.classList.toggle("dark");
        const theme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
        localStorage?.setItem("theme", theme);
        setTheme(theme);
      }
    };
  }, []);

  return (
    <button className="ThemeIcon" onClick={changeTheme}>
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
