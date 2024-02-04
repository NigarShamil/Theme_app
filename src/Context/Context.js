import { createContext } from "react";
import { getColor } from "../../theme_options/colors";



export const ThemeContext = createContext(getColor())