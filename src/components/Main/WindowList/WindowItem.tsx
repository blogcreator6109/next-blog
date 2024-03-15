import { useEffect, useRef, useState } from "react";
import "./WindowItem.scss";
import { Rnd } from "react-rnd";
import { getVarOfCSS } from "@/utils/common";

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

  useEffect(() => {
    if (windowRef.current) {
      const breakpointTablet = Number(getVarOfCSS("--breakpoint-tablet"));

      if (innerWidth < breakpointTablet) {
        windowRef.current.updatePosition({ x: 0, y: 0 });
        windowRef.current.updateSize({ width: innerWidth, height: innerHeight});
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
      <div className="wrapper">{window.name}</div>
    </Rnd>
  );
}
