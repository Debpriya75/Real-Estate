import React, { createContext, useState, useContext } from "react";

// Create the context
const DarkModeContext = createContext();

// Provider component
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Export the context directly so you can use useContext in your components
export { DarkModeContext };
