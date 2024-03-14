import BackgroundImage from "@/components/BackgroundImage";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { ReactNode } from "react";

import type { Metadata } from "next";
import "@/scss/globals.scss";

export const metadata: Metadata = {
  title: "Blog Creator Blog",
  description: "Blog Creator Blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* html 태그가 생성되자마자 테마를 확인해서 dark 값을 넣기 위함 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const _localStorageTheme = localStorage.getItem("theme");
            const _preferTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const _theme = _localStorageTheme || (_preferTheme ? 'dark' : 'light');
            document.documentElement.classList.add(_theme);
        `,
          }}
        ></script>

        <BackgroundImage />
        <Header />
        <Main />
        {children}
      </body>
    </html>
  );
}
