"use client";

import { useState } from "react";
import AppItem from "./AppList/AppItem";
import "./AppList.scss";
import apps from "./Apps.json";

export default function AppList({
  openApp,
}: {
  openApp: (app: AppType, appCenterPos: { x: number; y: number }) => void;
}) {
  const [selectedApp, setSelectedApp] = useState("");

  return (
    <ol className="AppList">
      {apps.map((app, idx) => {
        return (
          <AppItem
            key={app.name + String(idx)}
            app={app}
            isSelected={selectedApp === app.name}
            selectApp={() => {
              setSelectedApp(app.name);
            }}
            openApp={openApp}
          />
        );
      })}
    </ol>
  );
}
