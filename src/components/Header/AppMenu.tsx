"use client";

import "./AppMenu.scss";
import useCommonStore from "@/stores/common";

export default function AppMenu() {
  const { focusedWindow } = useCommonStore();

  return (
    <div>{focusedWindow ? focusedWindow.name : "Blog Creator's Blog"}</div>
  );
}
