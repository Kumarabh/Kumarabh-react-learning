import Card from "./components/Card"
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme-context.ts'
import Navbar from "./components/Navbar.tsx";

const App = () => {

  const [currentTheme, setCurrentTheme] = useState('light');

  const setLightTheme = () => setCurrentTheme('light');
  const setDarkTheme = () => setCurrentTheme('dark');

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(currentTheme);

  }, [currentTheme])

  return (
    <ThemeProvider value={{ currentTheme, setLightTheme, setDarkTheme }}>
      <div className="dark">
      <Navbar />
        <div className="container">
        <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App