import  { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Local storage persistence (optional)
  const storedTheme = localStorage.getItem('theme');
  const preferredTheme = storedTheme ? storedTheme === 'dark' : false; // Use 'dark' for dark theme preference in localStorage

  useEffect(() => {
    setIsDarkTheme(preferredTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme); // Apply theme on initial render and state change
  }, [isDarkTheme]); // Re-run useEffect when isDarkTheme changes

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light'); // Persist theme preference
    document.body.classList.toggle('dark-theme'); // Apply theme change
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;