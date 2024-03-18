import { useEffect, useRef, useState } from "react";
import "./WindowItem.scss";
import { Rnd } from "react-rnd";
import { getVarOfCSS } from "@/utils/common";

import dynamic from "next/dynamic";

export default function WindowItem({
  window,
  idx,
  initWindowPos,
  handleFocusWindow,
}: {
  window: WindowType;
  idx: number;
  initWindowPos: { x: number; y: number };
  handleFocusWindow: (window: WindowType) => void;
}) {
  const windowRef = useRef<Rnd | null>(null);
  const [mounted, setMounted] = useState(false);

  const [loadedComp, setLoadedComp] = useState<any>(null);

  useEffect(() => {
    const comp = dynamic(() => import(`./WindowItem/${window.name}`), {
      loading: () => <div>Loading...</div>,
    });

    setLoadedComp(comp);

    if (windowRef.current) {
      const breakpointTablet = Number(getVarOfCSS("--breakpoint-tablet"));

      if (innerWidth < breakpointTablet) {
        windowRef.current.updatePosition({ x: 0, y: 0 });
        windowRef.current.updateSize({
          width: innerWidth,
          height: innerHeight,
        });
        setTimeout(() => {
          setMounted(true);
        }, 500);
      } else {
        windowRef.current.updatePosition(initWindowPos);
        windowRef.current.updateSize({ width: 500, height: 300 });
        setTimeout(() => {
          setMounted(true);
        }, 500);
      }
    }
  }, []);

  return (
    <Rnd
      ref={windowRef}
      key={window.name + String(idx)}
      className={`Window ${mounted && "mounted"}`}
      style={{
        zIndex: window.zIndex,
      }}
      disableDragging={!mounted}
      default={{
        x: window.centerPos.x,
        y: window.centerPos.y,
        width: 0,
        height: 0,
      }}
      onMouseDown={() => {
        handleFocusWindow(window);
      }}
      onResizeStart={() => {
        handleFocusWindow(window);
      }}
    >
      {loadedComp ? loadedComp : <div>Loading...</div>}
    </Rnd>
  );
}
