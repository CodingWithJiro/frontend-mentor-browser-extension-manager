import { useState, useEffect } from "react";

const useTheme = () => {
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
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);

    if (isDarkTheme) {
      root.classList.add("dark");
    }
    return () => {
      root.classList.remove("dark");
    };
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, handleThemeChange };
};

export default useTheme;
