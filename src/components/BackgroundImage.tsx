import bg from "@/images/bg.png";
import Image from "next/image";
import "./BackgroundImage.scss";

export default function BackgroundImage() {
  return (
    <Image className="BackgroundImage" priority={true} src={bg} alt="bg" />
  );
}
