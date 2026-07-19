import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Diamond, Sparkles } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { key: 'light', icon: <Sun size={18} />, label: 'Light' },
    { key: 'dark', icon: <Moon size={18} />, label: 'Dark' },
    { key: 'blue', icon: <Diamond size={18} />, label: 'Blue' },
  ];

  return (
    <div className="theme-toggle-wrapper" role="radiogroup" aria-label="Theme selector">
      {themeOptions.map((opt) => (
        <button
          key={opt.key}
          className={`theme-btn ${theme === opt.key ? 'active' : ''}`}
          onClick={() => setTheme(opt.key)}
          aria-label={`Switch to ${opt.label} theme`}
          aria-checked={theme === opt.key}
          role="radio"
          title={opt.label}
        >
          {opt.icon}
          <span className="theme-tooltip">{opt.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;