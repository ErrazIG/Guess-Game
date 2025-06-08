import { useEffect, useState } from "react";
import style from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button className={style.darkmode} onClick={() => setIsDark(!isDark)}>
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
