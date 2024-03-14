import DateTime from "./Header/DateTime";
import ThemeIcon from "./Header/ThemeIcon";
import "./Header.scss";
import Image from "next/image";

import logoImg from "@/images/logo.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="left">
        <button className="logo">
          <Image src={logoImg} alt="logo" />
        </button>
        <strong>Blog Creator&apos;s Blog</strong>
      </div>
      <div className="right">
        <ThemeIcon />
        <DateTime />
      </div>
    </header>
  );
}
