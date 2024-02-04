
// import { useContext } from "react"
// import { ThemeContext } from "../../Context/Context"
// import { ThemeOptions } from "../../../theme_options/colors"


// export default function Navbar() {
//     const { theme, handler } = useContext(ThemeContext)
//     const schema = ThemeOptions[theme]
//     return (
//         <div>
//             <div className="navbar" style={{ ...schema.theme }}>
//                 <div className="middle">
//                   <span>Home</span>
//                   <span>Services</span>
//                   <span>Contact</span>
//                 </div>
//                 <div className="end">
//                     <select onChange={(e) => handler(e.target.value)} defaultValue={theme}>
//                         <option value={"dark"}>dark</option>
//                         <option value={"light"}>light</option>
//                         <option value={"violet"}>violet</option>
//                         <option value={"darkBlue"}>dark blue</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import { ThemeOptions } from "../../../theme_options/colors";

export default function Navbar() {
  const {theme, handler} = useContext(ThemeContext);

  // Ensure that the current theme is defined in ThemeOptions
  const schema = ThemeOptions[theme] || ThemeOptions["light"];

  return (
    <div>
      <div className="navbar" style={{ ...schema.theme }}>
        <div className="middle">
          <span>Home</span>
          <span>Services</span>
          <span>Contact Us</span>
        </div>
        <div className="end">
          <select onChange={(e) => handler(e.target.value)} defaultValue={theme}>
            <option value={"dark"}>dark</option>
            <option value={"light"}>light</option>
            <option value={"violet"}>violet</option>
            <option value={"darkBlue"}>dark blue</option>
          </select>
        </div>
      </div>
    </div>
  );
}
