"use client";

import { useReducer } from "react";
import AppList from "./Main/AppList";
import WindowList from "./Main/WindowList";

import "./Main.scss";
import apps from "./Main/Apps.json";

function appReducer(state: any, action: any) {
  switch (action.type) {
    case "OPEN_APP":
      return [
        ...state,
        {
          name: action.name,
          zIndex: state.length,
        },
      ];
    case "UPDATE_Z_INDEX":
      const selectedAppZIndex = state.find(
        (app: any) => app.name === action.app.name
      ).zIndex;
      const updatedState = state.map((app: any) => {
        if (app.name === action.app.name) {
          return {
            ...app,
            zIndex: state.length - 1,
          };
        } else if (app.zIndex > selectedAppZIndex) {
          return {
            ...app,
            zIndex: app.zIndex - 1,
          };
        }
        return app;
      });
      return updatedState;

    default:
      return state;
  }
}

export default function Main() {
  const [openedApps, dispatchOpenedApps] = useReducer(appReducer, []);

  return (
    <>
      <AppList
        apps={apps}
        handleOpenApp={(app) => {
          dispatchOpenedApps({ type: "OPEN_APP", name: app.name });
        }}
      />
      <WindowList
        openedApps={openedApps}
        handleFocusWindow={(app) => {
          dispatchOpenedApps({ type: "UPDATE_Z_INDEX", app });
        }}
      />
    </>
  );
}
