import { useState } from "react"
import { ThemeContext } from "./Context/Context";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/SideBar";
import Mainpage from "./components/MainPage/MainPage";
import { getColor } from "../theme_options/colors";
import "./components/theme.css"




function App() {
  const [state, setState] = useState(getColor);

  const handleTheme = (schema) => {
    setState(schema);
    localStorage.setItem('theme', schema);
  }
  return (
    <ThemeContext.Provider value={{ theme: state, handler: handleTheme }}>
      <div className="container">
        <Navbar />
        <div className="main_field">
          <Sidebar />
          <Mainpage />
        </div>
      </div>
    </ThemeContext.Provider>
  )



}

export default App