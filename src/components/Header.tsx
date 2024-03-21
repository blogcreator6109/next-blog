import Image from "next/image";

import logoImg from "@/images/logo.png";

import DateTime from "./Header/DateTime";
import ThemeIcon from "./Header/ThemeIcon";
import AppMenu from "./Header/AppMenu";

import "./Header.scss";

export default function Header() {
  return (
    <header className="Header">
      <div className="left">
        <button className="logo">
          <Image src={logoImg} alt="logo" />
        </button>
        <strong>
          <AppMenu />
        </strong>
      </div>
      <div className="right">
        <ThemeIcon />
        <DateTime />
      </div>
    </header>
  );
}
