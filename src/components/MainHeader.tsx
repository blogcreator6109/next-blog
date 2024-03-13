import DateTime from "./MainHeader/DateTime";
import ThemeIcon from "./MainHeader/ThemeIcon";
import "./MainHeader.scss";
import Image from "next/image";

import logoImg from "@/images/logo.png";

function MainHeader() {
  return (
    <header className="MainHeader">
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

export default MainHeader;
