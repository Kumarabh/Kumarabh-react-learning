import { useState } from "react";
import useTheme from '../context/theme-context'
const Navbar = () => {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const {currentTheme, setDarkTheme, setLightTheme} = useTheme();

  const onChangeHandler = (isChecked: boolean) => {
    if(isChecked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }

    console.log('==> currentTheme', currentTheme);
    console.log('==> isChecked', isChecked);
  }
  return (
    <div className="Navbar shadow-sm d-flex justify-content-start ">
      <label className="align-content-center mx-2" htmlFor="themeChanger">Dark Mode</label>
      <input 
      type="checkbox" 
      name="themeChanger" 
      id="themeChanger" 
      onChange={(e) => onChangeHandler(e.currentTarget.checked)}
      checked = {currentTheme === 'dark'}
      />
    </div>
  )
}

export default Navbar