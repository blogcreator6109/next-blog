import Image from "next/image";
import "./AppItem.scss";
import { useEffect, useMemo, useRef, useState } from "react";

export default function AppItem({
  app,
  isSelected,
  selectApp,
  openApp,
}: {
  app: AppType;
  isSelected: boolean;
  selectApp: () => void;
  openApp: (app: AppType, appCenterPos: { x: number; y: number }) => void;
}) {
  const itemRef = useRef(null);
  const [appCenterPos, setAppCenterPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (itemRef.current) {
      const { x, y, width, height } = (
        itemRef.current as HTMLElement
      ).getBoundingClientRect();
      setAppCenterPos({ x: x + width / 2, y: y + height / 2 });
    }
  }, []);

  return (
    <li key={app.name} className={`AppItem ${isSelected ? "selected" : ""}`}>
      <div className="image">
        <Image
          src={`/System/Icons/${app.name.toLowerCase()}.png`}
          alt={app.name}
          ref={itemRef}
          width={60}
          height={60}
          onMouseDown={selectApp}
          onTouchEnd={() => openApp(app, appCenterPos)}
          onDoubleClick={() => openApp(app, appCenterPos)}
        />
      </div>
      <span>{app.name}</span>
    </li>
  );
}
