import { useEffect, useMemo, useRef, useState } from "react";
import "./WindowItem.scss";
import { Rnd } from "react-rnd";
import { getVarOfCSS } from "@/utils/common";

import dynamic from "next/dynamic";

const setWindowRef = (
  target: Rnd,
  x: number,
  y: number,
  w: number,
  h: number
) => {
  target.updatePosition({ x, y });
  target.updateSize({
    width: w,
    height: h,
  });
};

export default function WindowItem({
  window,
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

  // useEffect 안에서 dynamic 값을 불러와서 사용하면 props key 어쩌구 Warning이 발생한다.
  // => A props object containing a "key" prop is being spread into JSX
  const LoadedComp = useMemo(() => {
    return dynamic(() => import(`./WindowItem/${window.name}`), {
      loading: () => <div>Loading...</div>,
    });
  }, []);

  useEffect(() => {
    if (windowRef.current) {
      const breakpointTablet = Number(getVarOfCSS("--breakpoint-tablet"));

      if (innerWidth < breakpointTablet) {
        setWindowRef(windowRef.current, 0, 0, innerWidth, innerHeight);
      } else {
        setWindowRef(
          windowRef.current,
          initWindowPos.x,
          initWindowPos.y,
          window.width,
          window.height
        );
      }

      // 위치 설정 후 0.5초 뒤에 마운트 되었다고 해서 그 떄부터는 마우스로 움직일 수 있게 한다.
      setTimeout(() => {
        setMounted(true);
      }, 500);
    }
  }, []);

  return (
    <Rnd
      ref={windowRef}
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
      <LoadedComp />
    </Rnd>
  );
}
