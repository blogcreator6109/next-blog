"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (e.matches) {
          // 시스템 테마가 다크 모드일 때의 처리
          console.log("다크다크다크");
        } else {
          // 시스템 테마가 라이트 모드일 때의 처리
          console.log("밝음밝음");
        }
      });
  }, []);
  return <div></div>;
}
