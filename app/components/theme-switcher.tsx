"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") as Theme;
    setTheme(currentTheme);
  }, []);

  const handleToggle = () => {
    const currentTheme = localStorage.getItem("theme") as Theme;
    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <button onClick={handleToggle}>
      <ThemeIcon theme={theme} />
    </button>
  );
};

type Props = {
  theme: Theme;
};

const ThemeIcon = ({ theme }: Props) => {
  switch (theme) {
    case "light":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "dark":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
  }
};
