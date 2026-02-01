import { useState, useEffect } from "react";
import ThemeIcon from "./ThemeIcon";
import ThemeButton from "./ThemeButton";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDarkTheme = theme === "dark";
    if (isDarkTheme) {
      root.classList.add("dark");
    }
    return () => {
      root.classList.remove("dark");
    };
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex max-w-12.5 items-center justify-center rounded-xl bg-(--COLOR-BUTTON-PRIMARY) hover:bg-(--COLOR-BUTTON-PRIMARY-HOVER) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
      <ThemeButton onThemeChange={handleThemeChange} theme={theme}>
        <ThemeIcon theme={theme} />
      </ThemeButton>
    </div>
  );
};

export default Theme;
