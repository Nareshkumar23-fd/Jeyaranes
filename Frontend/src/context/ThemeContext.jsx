import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const THEMES = ['light', 'dark', 'blue'];
const STORAGE_KEY = 'portfolio-theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && THEMES.includes(saved) ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  const setSpecificTheme = (themeName) => {
    if (THEMES.includes(themeName)) {
      setTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setSpecificTheme, cycleTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
