"use client";

import { useReducer } from "react";
import AppList from "./Main/AppList";
import WindowList from "./Main/WindowList";

import "./Main.scss";

function reducer(state: WindowType[], action: any) {
  switch (action.type) {
    case "OPEN_APP":
      return [
        ...state,
        {
          id: new Date().getTime(),
          name: action.name,
          zIndex: state.length,
          centerPos: action.appCenterPos,
        },
      ];
    case "UPDATE_Z_INDEX":
      const selectedWindow = state.find(
        (window) => window.id === action.window.id
      );
      const selectedWinZIndex = selectedWindow?.zIndex || 0;

      return state.map((window) => {
        // 이름이 동일한 창은 zIndex를 최상위로
        if (window.id === action.window.id) {
          return {
            ...window,
            zIndex: state.length,
          };
          // 다른 창은 zIndex를 하나씩 낮춤
        } else if (window.zIndex > selectedWinZIndex) {
          return {
            ...window,
            zIndex: window.zIndex - 1,
          };
        }
        // zIndex가 동일한 창은 그대로
        return window;
      });

    default:
      return state;
  }
}

export default function Main() {
  const [windows, dispatchWindows] = useReducer(reducer, []);

  return (
    <>
      <AppList
        openApp={(app: AppType, appCenterPos: { x: number; y: number }) => {
          return dispatchWindows({
            type: "OPEN_APP",
            name: app.name,
            appCenterPos,
          });
        }}
      />
      <WindowList
        windows={windows}
        handleFocusWindow={(window: WindowType) => {
          dispatchWindows({ type: "UPDATE_Z_INDEX", window });
        }}
      />
    </>
  );
}
