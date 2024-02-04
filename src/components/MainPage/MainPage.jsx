import { useContext } from "react"
import { ThemeContext } from "../../Context/Context"
import { ThemeOptions } from "../../../theme_options/colors"
import Company from "./Company-amico.svg"


export default function Mainpage() {
    const { theme, handler } = useContext(ThemeContext)
    //   const schema = ThemeOptions[theme]
    const schema = ThemeOptions[theme] || ThemeOptions["light"];
    return (
        <div className="mainpage" style={{ ...schema.theme , position:"relative"}} >
            <div >
                <h1>EVERYTHING YOU NEED FOR WORK ,<br /> ALL IN ONE PLACE</h1>
                <div className="text">
                    <p>Finally now all your tools ,content,and collobrators are accessible from the same place.
                        This page is more than secure storage -it's a smart , seamless way to optimize ypur existing workflow</p>
                </div>
                <div style={{position:"absolute", right: 0, bottom: 50}}>
                    <img src={Company} style={{ width: "80%", height: 400 }} />
                </div>
            </div>
        </div>
    )
}