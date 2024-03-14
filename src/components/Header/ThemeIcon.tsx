"use client";

import { useEffect, useMemo, useState } from "react";
import "./ThemeIcon.scss";
import Image from "next/image";

import moonIcon from "@/images/moon.svg";
import sunIcon from "@/images/sun.svg";

export default function ThemeIcon() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const _localStorageTheme = localStorage.getItem("theme");
    const _preferTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const _theme = _localStorageTheme || (_preferTheme ? "dark" : "light");
    document.documentElement.classList.add(_theme);

    setTheme(_theme);
  }, []);

  const changeTheme = useMemo(() => {
    return () => {
      if (document) {
        const classList = document.documentElement.classList;

        classList.toggle("dark");
        const theme = classList.contains("dark") ? "dark" : "light";

        localStorage?.setItem("theme", theme);
        setTheme(theme);
      }
    };
  }, []);

  return (
    <button className="ThemeIcon" onClick={changeTheme}>
      <Image
        src={theme === "dark" ? sunIcon : moonIcon}
        alt="theme-toggle"
        width="18"
      />
    </button>
  );
}
