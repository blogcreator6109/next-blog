import "./AppList.scss";
import Image from "next/image";

const apps = [
  "Finder",
  "Memo",
  "Book",
  "Diary",
  "Guestbook",
  "Music",
  "Twitter",
];

export default function AppList() {
  return (
    <ol className="AppList">
      {apps.map((app) => {
        return (
          <li key={app}>
            <Image
              src={`/System/Icons/${app.toLowerCase()}.webp`}
              alt={app}
              width={48}
              height={48}
            />
            <span>{app}</span>
          </li>
        );
      })}
    </ol>
  );
}
