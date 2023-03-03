import { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext({
  isDarkMode: false,
});

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Get theme preference from local storage
  useEffect(() => {}, []);

  // Update theme preference in local storage
  useEffect(() => {}, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeContextProvider };
