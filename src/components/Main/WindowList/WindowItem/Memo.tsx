import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "./Memo.scss";

export default function Memo() {
  const [recordMap, setRecordMap] = useState<any>(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecordMap(data);
      });
  }, []);

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
            darkMode={false}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
