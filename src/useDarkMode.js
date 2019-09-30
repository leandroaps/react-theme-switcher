import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  const localTheme = window.localStorage.getItem('theme');

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme]);

  return [theme, toggleTheme];
};

export { useDarkMode as default };
