import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import React, { useCallback, useMemo, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import useCommonStore from "@/stores/common";

import "./Notion.scss";

export default function Notion() {
  const [recordMap, setRecordMap] = useState<any>(null);
  const { theme } = useCommonStore();

  // Third party components
  const Code = useMemo(
    () =>
      dynamic(() =>
        import("react-notion-x/build/third-party/code").then((m) => m.Code)
      ),
    []
  );
  const Collection = useMemo(
    () =>
      dynamic(() =>
        import("react-notion-x/build/third-party/collection").then(
          (m) => m.Collection
        )
      ),
    []
  );

  const getData = useCallback((id: string) => {
    fetch("/api/notion/page/" + id)
      .then((res) => res.json())
      .then((data) => {
        setRecordMap(data);
      });
  }, []);

  if (!recordMap) {
    getData("ab2f2cac09c948c6b8cf5c9d80d4e977");
  }

  return (
    <div className="Memo">
      <div className="head"></div>
      <div
        className="body"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {!!recordMap ? (
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={theme === "dark"}
            mapPageUrl={(url) => {
              return `/notion/${url}`;
            }}
            components={{
              Code,
              Collection,
              nextImage: Image,
              PageLink: ({ href, children }) => (
                <Link
                  href={href}
                  onClick={() => {
                    // href = /notion/ab2f2cac09c948c6b8cf5c9d80d4e977
                    getData(href.split("/").pop());
                  }}
                >
                  {children}
                </Link>
              ),
            }}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
