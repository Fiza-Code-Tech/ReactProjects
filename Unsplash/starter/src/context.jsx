import { createContext, useContext, useState, useEffect } from 'react';

//Creating context
const AppContext = createContext();

//Provider component
export const AppProvider = ({ children }) => {
  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

    return storedDarkMode || prefersDarkMode;
  };
  //dark theme state variable and method
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  //Search value
  const [searchValue, setSearchValue] = useState('cat');
  //toggle dark theme method
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);
  //returning the context provider
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

//The global context
export const useGlobalContext = () => useContext(AppContext);
