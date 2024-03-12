"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DateTime() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const format = innerWidth < 768 ? "h:mm" : "ddd, MMMM D, YYYY h:mm A";
    const now = dayjs().format(format);

    setFormattedDate(now);
    const interval = setInterval(() => setFormattedDate(now), 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{formattedDate}</div>;
}
