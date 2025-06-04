import { useEffect } from 'react';

const useThemeToggle = () => {
  useEffect(() => {
    const toggle = document.getElementById('toggle');
    const htmlEl = document.documentElement;
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.classList.toggle('dark-mode', savedTheme === 'dark');
    if (toggle) toggle.checked = savedTheme === 'dark';

    const handleToggle = () => {
      const isDark = toggle.checked;
      htmlEl.classList.toggle('dark-mode', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    if (toggle) {
      toggle.addEventListener('change', handleToggle);
      return () => toggle.removeEventListener('change', handleToggle);
    }
  }, []);
};

export default useThemeToggle;