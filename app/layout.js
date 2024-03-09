import "./_scss/globals.scss";

export const metadata = {
  title: "Blog Creator's Blog",
  description: "Blog Creator의 블로그입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
