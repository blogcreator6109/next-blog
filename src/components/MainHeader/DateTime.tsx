"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getVarOfCSS } from "@/utils/common";
import { throttle } from "lodash";
import "./DateTime.scss";

const breakpointTablet = Number(getVarOfCSS("--breakpoint-tablet"));

const getFormatByDevice = () => {
  const isMobile = innerWidth < breakpointTablet;
  return isMobile ? "h:mm" : "ddd, MMMM D, YYYY h:mm A";
};

export default function DateTime() {
  const [now, setNow] = useState(dayjs());
  const [format, setFormat] = useState("h:mm");

  useEffect(() => {
    const setDateFormat = () => {
      setFormat(getFormatByDevice());
    };
    const throttledSetDateFormat = throttle(setDateFormat, 100);

    setDateFormat();
    const interval = setInterval(() => {
      setNow(dayjs());
      setDateFormat();
    }, 60 * 1000);

    window.addEventListener("resize", throttledSetDateFormat);

    return () => {
      clearInterval(interval);
      removeEventListener("resize", throttledSetDateFormat);
    };
  }, []);

  return <button className="DateTime">{now.format(format)}</button>;
}
