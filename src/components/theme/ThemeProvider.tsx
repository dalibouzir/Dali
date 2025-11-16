"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  systemTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "dali-theme";

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Intentionally ignore storage errors (Safari private mode, etc.)
  }
  return null;
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [userPreference, setUserPreference] = useState<Theme | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return readStoredTheme();
  });
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = readStoredTheme();
    if (stored) {
      return stored;
    }
    const datasetTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    return datasetTheme ?? "dark";
  });
  const [systemTheme, setSystemTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return getSystemTheme();
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateSystemTheme = (matches: boolean) => {
      setSystemTheme(matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateSystemTheme(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => updateSystemTheme(event.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (userPreference) {
      setThemeState((current) => (current === userPreference ? current : userPreference));
      return;
    }
    setThemeState((current) => (current === systemTheme ? current : systemTheme));
  }, [systemTheme, userPreference]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      if (userPreference) {
        window.localStorage.setItem(STORAGE_KEY, userPreference);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  }, [userPreference]);

  const setTheme = useCallback((next: Theme) => {
    setUserPreference(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      setUserPreference(nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      systemTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, systemTheme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
