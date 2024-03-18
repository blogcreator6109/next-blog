import { useEffect, useState } from "react";
import "./WindowList.scss";
import WindowItem from "./WindowList/WindowItem";

let isMounted = false;

export default function WindowList({
  windows,
  handleFocusWindow,
}: {
  windows: WindowType[];
  handleFocusWindow: (window: WindowType) => void;
}) {
  // 윈도우 열었을 때 초기 위치 설정
  const [initWindowPos, setInitWindowPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    // 마운트 되었을 때 초기 위치를 결정한다.
    const handleResize = () => {
      setInitWindowPos({
        x: window.innerWidth / 2 - 250,
        y: window.innerHeight / 2 - 150,
      });
    };
    isMounted = true;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      // window가 변화가 있을 때마다 초기 위치를 오른쪽 아래로 살짝 변경한다.
      setInitWindowPos({
        x: initWindowPos.x + 20,
        y: initWindowPos.y + 20,
      });
    }
    console.log(windows);
  }, [windows]);

  return (
    <>
      {windows.map((window, idx) => (
        <div key={window.id}>
          <WindowItem
            initWindowPos={initWindowPos}
            window={window}
            idx={idx}
            handleFocusWindow={handleFocusWindow}
          />
        </div>
      ))}
    </>
  );
}
