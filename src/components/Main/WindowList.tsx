import "./WindowList.scss";
import { Rnd } from "react-rnd";

type AppType = {
  name: string;
  minWidth: number;
  minHeight: number;
  zIndex: number;
};

export default function WindowList({
  openedApps,
  handleFocusWindow,
}: {
  openedApps: AppType[];
  handleFocusWindow: (app: AppType) => void;
}) {
  return (
    <>
      {openedApps.map((app, idx) => (
        <Rnd
          key={app.name + String(idx)}
          className="Window"
          minHeight={app.minHeight || 200}
          minWidth={app.minWidth || 200}
          style={{ zIndex: app.zIndex }}
          default={{
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          }}
          onMouseDown={() => {
            handleFocusWindow(app);
          }}
          onResizeStart={() => {
            handleFocusWindow(app);
          }}
        >
          <div className="wrapper">{app.name}</div>
        </Rnd>
      ))}
    </>
  );
}
