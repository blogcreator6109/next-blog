"use client";

import { useState } from "react";
import "./AppList.scss";
import Image from "next/image";

type AppType = {
  name: string;
  minWidth: number;
  minHeight: number;
  zIndex: number;
};

export default function AppList({
  apps,
  handleOpenApp,
}: {
  apps: AppType[]; // Apps.json 참조
  handleOpenApp: (app: AppType) => void;
}) {
  const [selectedApp, setSelectedApp] = useState("");

  return (
    <ol className="AppList">
      {apps.map((app) => {
        return (
          <li
            key={app.name}
            className={selectedApp === app.name ? "selected" : ""}
          >
            <div className="image">
              <Image
                src={`/System/Icons/${app.name.toLowerCase()}.png`}
                alt={app.name}
                width={60}
                height={60}
                onMouseDown={() => {
                  setSelectedApp(app.name);
                }}
                onDoubleClick={() => {
                  handleOpenApp(app);
                }}
              />
            </div>
            <span>{app.name}</span>
          </li>
        );
      })}
    </ol>
  );
}
