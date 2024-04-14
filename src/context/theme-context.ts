import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  currentTheme: 'light',
  setLightTheme: () => { },
  setDarkTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}