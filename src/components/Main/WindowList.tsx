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
  const [initWindowPos, setInitWindowPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
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
      setInitWindowPos({
        x: initWindowPos.x + 20,
        y: initWindowPos.y + 20,
      });
    }
  }, [windows]);

  return (
    <>
      {windows.map((window, idx) => (
        <WindowItem
          key={window.id}
          initWindowPos={initWindowPos}
          window={window}
          idx={idx}
          handleFocusWindow={handleFocusWindow}
        />
      ))}
    </>
  );
}
